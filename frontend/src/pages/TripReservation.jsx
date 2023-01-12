import Header from "../components/Header";
import ReservationForm from "../components/ReservationForm";
import { ReservationContextProvider } from "../contexts/ReservationsContext";

function TripReservation() {
  return (
    <>
      <Header />
      <ReservationContextProvider>
        <ReservationForm />
      </ReservationContextProvider>
    </>
  );
}

export default TripReservation;
