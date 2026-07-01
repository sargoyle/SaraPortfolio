import LabProjectDetail from './LabProjectDetail.jsx';
import ModalShell from './ModalShell.jsx';

export default function LabProjectDetailModal({ project, onClose, onPrevious, onNext }) {
  if (!project) return null;

  return (
    <ModalShell
      title={project.title}
      onClose={onClose}
      onPrevious={onPrevious}
      onNext={onNext}
      showNavigation={false}
      variant="lab"
    >
      <LabProjectDetail project={project} onPrevious={onPrevious} onNext={onNext} />
    </ModalShell>
  );
}
