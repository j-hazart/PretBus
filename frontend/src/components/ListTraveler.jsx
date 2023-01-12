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
              <li className="list-start"> Voiture </li>
              <li className="list-start"> Mini-Bus </li>
              <li className="list-start"> Bus </li>
            </ul>
          </details>
        </li>
      </ul>
      <ul className="list-of-traveler">
        <li className="traveler">
          <details>
            <summary className="name-traveler">Prénom</summary>
            <ul className="list-start-end">
              <li className="list-start">
                Départ : 6 rue de Saint-Brice 51100 Reims
              </li>
              <li className="list-end">
                Arrivé : 5 rue jacques de la giraudière 51100 Reims
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
