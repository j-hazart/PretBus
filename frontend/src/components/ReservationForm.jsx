import { useState } from "react";
import "../pages/styles/TripReservation.css";
import { today, convertToFr } from "../services/getTodayDate";
import adressData from "../services/adressData";

function ReservationForm() {
  const [reservationDate, setReservationDate] = useState(today);
  const [startAdress, setStartAdress] = useState("");
  const [endAdress, setEndAdress] = useState("");
  const [isReserved, setIsReserved] = useState(false);

  const handleChange = (e, input) => {
    if (input === "start") {
      setStartAdress(e.target.value);
    } else {
      setEndAdress(e.target.value);
    }
  };

  return isReserved ? (
    <p>
      Votre réservation pour le trajet du <strong>{startAdress}</strong> au{" "}
      <strong>{endAdress}</strong> est bien enregistrer pour le{" "}
      <strong>{convertToFr(reservationDate)}</strong>
    </p>
  ) : (
    <form className="reservation-form">
      <label htmlFor="start">Lieu de départ :</label>
      <input
        type="text"
        name="start"
        list="adress"
        value={startAdress}
        onChange={(e) => handleChange(e, "start")}
      />
      <datalist id="adress">
        {adressData.map((adress) => (
          <option key={adress.id} value={adress.adress} label={adress.city} />
        ))}
      </datalist>
      <label htmlFor="end">Lieu d'arrivé :</label>
      <input
        type="text"
        name="end"
        list="adress"
        value={endAdress}
        onChange={(e) => handleChange(e, "end")}
      />
      <label htmlFor="date">Jour de réservation :</label>
      <input
        type="date"
        name="date"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
        min={today}
      />
      <button type="button" onClick={() => setIsReserved(true)}>
        Réserver
      </button>
    </form>
  );
}

export default ReservationForm;
