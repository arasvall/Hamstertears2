//rendera ut alla tillgängliga pass
import BookForm from "../components/WorkoutForm";
import BookList from "../components/WorkoutList";
import { Workout } from "../types/Workout";
import { useState } from "react";
import "../style/NewWorkoutPage.css";

function BookingPage(): JSX.Element {
  const [bookings, setBookings] = useState([] as Workout[]);

  const addBooking = (booking: Workout) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="new-workout-page">
      <h3>Add new workout</h3>
      <BookForm handleNewWorkout={addBooking} />
      <BookList workouts={bookings} />
    </div>
  );
}

export default BookingPage;
