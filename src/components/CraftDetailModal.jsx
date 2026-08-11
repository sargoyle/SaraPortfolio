import CraftDetail from './CraftDetail.jsx';
import ModalShell from './ModalShell.jsx';

export default function CraftDetailModal({ craft, onClose, onPrevious, onNext }) {
  if (!craft) return null;

  return (
    <ModalShell
      title={`${craft.type} craft details`}
      onClose={onClose}
      onPrevious={onPrevious}
      onNext={onNext}
      showNavigation={Boolean(onPrevious && onNext)}
      variant="craft"
    >
      <CraftDetail craft={craft} />
    </ModalShell>
  );
}
