import { Monster } from "../containers/App";

export default function Card({ id, name, email }: Monster) {
  return (
    <div className="tc bg-light-green grow br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
