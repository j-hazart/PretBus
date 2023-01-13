import "./ListTraveler.css";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function ListTraveler() {
  return (
    <div className="pageofdriver">
      <Header />
      <Link to="/map">
        <button type="button">Map</button>{" "}
      </Link>
      <ul className="list-of-vehicule">
        <li className="traveler">
          <details>
            <summary className="name-traveler"> Mon véhicule </summary>
            <ul className="list-start-end">
              <li className="list-start">
                <input type="checkbox" id="scales" name="scales" />
                Voiture
              </li>
              <li className="list-start">
                <input type="checkbox" id="scales" name="scales" />
                Mini-Bus
              </li>
              <li className="list-start">
                <input type="checkbox" id="scales" name="scales" /> Bus{" "}
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <ul className="list-of-traveler">
        <li className="traveler">
          <details>
            <summary className="name-traveler">Pierre-Yves</summary>
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
