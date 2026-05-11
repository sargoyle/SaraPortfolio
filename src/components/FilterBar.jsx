export default function FilterBar({ filters, selectedFilter, onChange, itemCounts }) {
  return (
    <div className="filters" aria-label="Filter projects">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
          onClick={() => onChange(filter)}
          aria-pressed={selectedFilter === filter}
        >
          {filter} ({itemCounts[filter] || 0})
        </button>
      ))}
    </div>
  );
}
