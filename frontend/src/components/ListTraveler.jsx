import arrow from "../assets/arrow.png";
import "./ListTraveler.css";

export default function ListTraveler() {
  return (
    <ul className="list-of-traveler">
      <li className="traveler">
        <p className="name-traveler">Prénom Nom</p>
        <button className="button-start-end-traveler" type="button">
          <img className="arrow-start-end-traveler" src={arrow} alt="arrow" />
        </button>
        <ul className="list-start-end">
          <li className="list-start">Départ :</li>
          <li className="list-end">Arrivé : </li>
        </ul>
      </li>
    </ul>
  );
}
