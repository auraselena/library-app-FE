import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element=<Dashboard /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
      </Routes>
    </div>
  );
}

export default App;
