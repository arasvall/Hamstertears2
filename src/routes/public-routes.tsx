import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewWorkoutPage from "../pages/NewWorkoutPage";
import BookWorkout from "../pages/BookWorkoutPage";
import Contact from "../pages/ContactPage";
import Navbar from "../components/Navbar";
import LoginPage from "../pages/LoginPage";


function PublicRoutes(): JSX.Element {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/NewWorkoutPage" element={<NewWorkoutPage />} />
        <Route path="/BookWorkoutPage" element={<BookWorkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default PublicRoutes;
