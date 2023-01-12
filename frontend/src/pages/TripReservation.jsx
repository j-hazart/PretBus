import { useState } from "react";
import "./styles/TripReservation.css";

function TripReservation() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${year}-${`0${month}`.slice(-2)}-${`0${day}`.slice(-2)}`;
  const [reservationDate, setReservationDate] = useState(today);
  return (
    <form className="reservation-form">
      <label htmlFor="start">Lieu de départ :</label>
      <input type="text" name="start" />
      <label htmlFor="end">Lieu d'arrivé :</label>
      <input type="text" name="end" />
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
