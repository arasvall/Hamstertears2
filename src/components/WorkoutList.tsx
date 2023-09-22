import { Workout } from "../types/Workout";
import BookItem from "./WorkoutItem";

type BookListProps = {
  workouts: Workout[];
};

function BookList({ workouts }: BookListProps): JSX.Element {
  return (
    <>
      {workouts.map((workout) => (
        <BookItem workout={workout} />
      ))}
    </>
  );
}

export default BookList;
