import "./ListTraveler.css";

export default function ListTraveler() {
  return (
    <div className="pageofdriver">
      <ul className="list-of-traveler">
        <li className="traveler">
          <details>
            <summary className="name-traveler"> Mon véhicule </summary>
            <ul className="list-start-end">
              <li className="list-start"> Mercedes C63 AMG </li>
            </ul>
          </details>
        </li>
      </ul>
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
    </div>
  );
}
