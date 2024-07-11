
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import "./styles/App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route 
      path="/ducks" 
      element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Ducks />
      </ProtectedRoute>
      } 
      />
      <Route 
      path="/my-profile" 
      element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <MyProfile />
        </ProtectedRoute>
      } 
      />
      <Route 
      path="/login" 
      element={
        // <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Login />
      //  </ProtectedRoute>
      } 
      />
      <Route
       path="/register"
        element={
        // <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Register />
        // </ProtectedRoute>
        }
         />  
    </Routes>
  );
}

export default App;
