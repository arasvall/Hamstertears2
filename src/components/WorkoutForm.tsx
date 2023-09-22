//rendera ut alla tillgängliga pass

import { Workout } from "../types/Workout";
import { ChangeEvent, FormEvent, useState } from "react";
import "../style/BookForm.css";

interface WorkoutData {
  title: string;
  description: string;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

type WorkoutFormProps = {
  handleNewWorkout: (booking: Workout) => void;
};

const defaultWorkoutData: WorkoutData = {
  title: "",
  description: "",
};

function WorkoutForm({ handleNewWorkout }: WorkoutFormProps): JSX.Element {
  const [workoutData, setWorkoutData] = useState(defaultWorkoutData);

  const handleNameChange = (event: InputEvent) => {
    setWorkoutData({ ...workoutData, title: event.target.value });
  };

  const handleDescriptionChange = (event: InputEvent) => {
    setWorkoutData({ ...workoutData, description: event.target.value });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleNewWorkout({
      title: workoutData.title,
      description: workoutData.description,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="form-div">
          <label>Title:</label>
          <input
            type="text"
            className="title-input"
            onChange={handleNameChange}
          />
        </div>

        <div className="form-div">
          <label>Description:</label>
          <input
            type="text"
            className="description-input"
            onChange={handleDescriptionChange}
          />
        </div>

        <button type="submit">Add workout</button>
      </form>
    </>
  );
}

export default WorkoutForm;
