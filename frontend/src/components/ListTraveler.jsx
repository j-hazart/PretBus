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
                <input type="checkbox" id="scales" name="scales" /> Bus
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
              <li className="list-start">Départ : Rue Chanzy, 51100 Reims</li>
              <li className="list-end">Arrivé : 08200 Sedan</li>
            </ul>
          </details>
        </li>
        <li className="traveler">
          <details>
            <summary className="name-traveler">Adnan</summary>
            <ul className="list-start-end">
              <li className="list-start">Départ : 02340 Montcornet</li>
              <li className="list-end">
                Arrivé : 22 Rue du Château, 08240 Buzancy
              </li>
            </ul>
          </details>
        </li>
        <li className="traveler">
          <details>
            <summary className="name-traveler">Valentin</summary>
            <ul className="list-start-end">
              <li className="list-start">Départ : 55600 Montmédy</li>
              <li className="list-end">
                Arrivé : 19 Rue Emile Giros, 52100 Saint-Dizier
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
