import LabProjectDetail from './LabProjectDetail.jsx';
import ModalShell from './ModalShell.jsx';

export default function LabProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <ModalShell title={project.title} onClose={onClose} showNavigation={false}>
      <LabProjectDetail project={project} />
    </ModalShell>
  );
}
