import React from "react";
import PublicRoutes from "./routes/public-routes";
import Header from "./components/Header";
import "./style/App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <PublicRoutes />
      <LoginPage />
    </div>
  );
}

export default App;
