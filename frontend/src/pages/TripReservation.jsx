import axios from "axios";
import { useState } from "react";
import "./styles/TripReservation.css";
import today from "../services/getTodayDate";

function TripReservation() {
  const [reservationDate, setReservationDate] = useState(today);
  const [startAdress, setStartAdress] = useState("");
  const [endAdress, setEndAdress] = useState("");
  const [searchAdress, setSearchAdress] = useState([]);

  const getAdress = (adress) => {
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${adress}&limite=5`)
      .then((data) => setSearchAdress(data.data.features));
  };

  const handleChange = (e, input) => {
    if (input === "start") {
      setStartAdress(e.target.value);
      getAdress(startAdress);
    } else {
      setEndAdress(e.target.value);
      getAdress(endAdress);
    }
  };

  return (
    <form className="reservation-form">
      <label htmlFor="start">Lieu de départ :</label>
      <input
        type="text"
        name="start"
        list="start"
        value={startAdress}
        onChange={(e) => handleChange(e, "start")}
        onClick={() => setSearchAdress([])}
      />
      <datalist id="start">
        {searchAdress.map((adress) => (
          <option
            key={adress.properties.id}
            value={adress.properties.label}
            label={adress.properties.city}
          />
        ))}
      </datalist>
      <label htmlFor="end">Lieu d'arrivé :</label>
      <input
        type="text"
        name="end"
        list="end"
        value={endAdress}
        onChange={(e) => handleChange(e, "end")}
        onClick={() => setSearchAdress([])}
      />
      <datalist id="end">
        {searchAdress.map((adress) => (
          <option
            key={adress.properties.id}
            value={adress.properties.label}
            label={adress.properties.city}
          />
        ))}
      </datalist>
      <label htmlFor="date">Jour de réservation :</label>
      <input
        type="date"
        name="date"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
        min={today}
      />
      <button type="button">Réserver</button>
    </form>
  );
}

export default TripReservation;
