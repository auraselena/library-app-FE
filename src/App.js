import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { API_url } from "./helper";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "axios";
import { loginAction } from "./actions/userAction";

function App(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const keepLogin = () => {
    let getLocalStorage = localStorage.getItem("library_login");
    console.log("cek dong", getLocalStorage);
    if (getLocalStorage) {
      Axios.get(API_url + `/users/keeplogin`, {
        headers: {
          Authorization: `Bearer ${getLocalStorage}`,
        },
      })
        .then((response) => {
          dispatch(loginAction(response.data));
          setLoading(false);
          localStorage.setItem("library_login", response.data.token);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div className="App">
      <Navbar loading={loading} />
      <Routes>
        <Route path="/" element=<Dashboard /> />
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
      </Routes>
    </div>
  );
}

export default App;
