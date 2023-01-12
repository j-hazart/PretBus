import "./ListTraveler.css";
import Header from "./Header";

export default function ListTraveler() {
  return (
    <div className="pageofdriver">
      <Header />
      <ul className="list-of-vehicule">
        <li className="traveler">
          <details>
            <summary className="name-traveler"> Mon véhicule </summary>
            <ul className="list-start-end">
              <li className="list-start"> Mini-Bus </li>
            </ul>
          </details>
        </li>
      </ul>
      <ul className="list-of-traveler">
        <li className="traveler">
          <details>
            <summary className="name-traveler">Prénom</summary>
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
