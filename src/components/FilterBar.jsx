export default function FilterBar({ filters, selectedFilter, onChange, itemCounts }) {
  return (
    <div className="filters" role="group" aria-label="Filter visible portfolio items">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
          onClick={() => onChange(filter)}
          aria-pressed={selectedFilter === filter}
          aria-label={`Show ${filter} items, ${itemCounts[filter] || 0} available`}
        >
          {filter} ({itemCounts[filter] || 0})
        </button>
      ))}
    </div>
  );
}
