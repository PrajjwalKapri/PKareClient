import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Login from "./Pages/Login";
import server from "../config/config";
import { Context } from "./store/store";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const setIsAuthenticatedState = (value) => setIsAuthenticated(value);
  const setUserState = (value) => setUser(value);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${server}/api/v1/user/patient/me`, {
          withCredentials: true,
        });

        if (data.user) {
          setIsAuthenticatedState(true);
          setUserState(data.user); // Corrected from response.data.user to data.user
        } else {
          setIsAuthenticatedState(false);
          setUserState({});
        }
      } catch (error) {
        setIsAuthenticatedState(false);
        setUserState({});
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Router>
        <Context.Provider
          value={{
            isAuthenticated,
            setIsAuthenticatedState,
            user,
            setUserState,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
          <ToastContainer position="top-center" />
        </Context.Provider>
      </Router>
    </>
  );
};

export default App;
