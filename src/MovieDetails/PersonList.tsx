import { Link } from "react-router";

function PersonList({ list }: PersonListProps) {
  return list?.map((person, index) => (
    <li key={index}>
      <Link to={person.url} className="capitalize">
        {person.name}
      </Link>
    </li>
  ));
}

export default PersonList;
