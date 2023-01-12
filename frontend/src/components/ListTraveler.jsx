import "./ListTraveler.css";

export default function ListTraveler() {
  return (
    <ul className="list-of-traveler">
      <li className="traveler">
        <p className="name-traveler">Prénom Nom</p>

        <ul className="list-start-end">
          <li className="list-start">Départ :</li>
          <li className="list-end">Arrivé : </li>
        </ul>
      </li>
    </ul>
  );
}
