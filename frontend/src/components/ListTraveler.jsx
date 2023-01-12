import "./ListTraveler.css";

export default function ListTraveler() {
  return (
    <ul className="list-of-traveler">
      <li className="traveler">
        <details>
          <summary className="name-traveler">Prénom Nom</summary>
          <ul className="list-start-end">
            <li className="list-start">Départ :</li>
            <li className="list-end">Arrivé : </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}
