import { Workout } from "../types/Workout";
import "../style/workoutItem.css";

type BookItemProps = {
  workout: Workout;
};

let array: Array<string> = [""];

function BookItem({ workout }: BookItemProps): JSX.Element {
  const title = workout.title;
  array.push(title);

  console.log(array);
  return (
    <>
      <div className="workout-item">
        <h4>{workout.title} </h4>
        <p>{workout.description}</p>
      </div>
    </>
  );
}

export default BookItem;
