const navItems = [
  { id: 'home', label: 'Home', shortLabel: 'Home' },
  { id: 'crafter', label: 'Crafter Dark' },
  { id: 'photo', label: 'Photography' },
  { id: 'games', label: "Sara's Lab" },
  { id: 'ai', label: 'AI POCs' },
];

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-btn ${item.id === 'home' ? 'home-btn' : ''} ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={currentPage === item.id ? 'page' : undefined}
            aria-label={item.id === 'home' ? 'Go to Home' : undefined}
          >
            {item.id === 'home' ? <span aria-hidden="true">⌂</span> : item.label}
            {item.id === 'home' && <span className="sr-only">{item.shortLabel}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
}
