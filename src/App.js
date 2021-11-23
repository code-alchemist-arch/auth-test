import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./app/pages/Login";
import Welcome from "./app/pages/Welcome";
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
