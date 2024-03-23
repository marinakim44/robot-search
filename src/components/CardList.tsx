import Card from "./Card";
import { Monster } from "../containers/App";

type CardListProps = {
  robots: Monster[];
};

export default function CardList({ robots }: CardListProps) {
  // if (true) {
  //   throw new Error("New error here");
  // }
  // above error in production will not look like an error
  console.log("card list");
  return (
    <div>
      {robots.map((r, i) => {
        return <Card key={i} id={r.id} name={r.name} email={r.email} />;
      })}
    </div>
  );
}
