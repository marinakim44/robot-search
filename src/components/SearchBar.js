export default function SearchBar({ searchField, searchChange }) {
  return (
    <div className="pa2">
      <input className="pa3" placeholder="Search..." onChange={searchChange} />
    </div>
  );
}
