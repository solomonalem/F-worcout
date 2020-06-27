import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import ExercisesList from "./components/exercisesList.js";
import EditExercise from "./components/editExercise.js";
import CreateExercise from "./components/createExercise.js";
import CreateUser from "./components/createUser.js";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Footer />
    </Router>
  );
}

export default App;
