import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  searchChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBar({ searchChange }: SearchBoxProps) {
  console.log("card list");
  return (
    <div className="pa2">
      <input className="pa3" placeholder="Search..." onChange={searchChange} />
    </div>
  );
}
