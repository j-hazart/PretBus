import PropTypes from "prop-types";
import { createContext, useState, useMemo } from "react";
import { today } from "../services/getTodayDate";

const ReservationContext = createContext();

export default ReservationContext;

export function ReservationContextProvider({ children }) {
  const [allReservation, setAllReservation] = useState([]);
  const [reservationDate, setReservationDate] = useState(today);
  const [startAdress, setStartAdress] = useState("");
  const [endAdress, setEndAdress] = useState("");

  const reservationsContext = useMemo(() => ({
    allReservation,
    setAllReservation,
    reservationDate,
    setReservationDate,
    startAdress,
    setStartAdress,
    endAdress,
    setEndAdress,
  }));

  return (
    <ReservationContext.Provider value={reservationsContext}>
      {children}
    </ReservationContext.Provider>
  );
}

ReservationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
