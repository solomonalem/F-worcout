import React, { Component } from "react";

import axios from "axios";
import Exercise from "./exercise";

export default class ExercisesList extends Component {
  state = { exercises: [] };

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => this.setState({ exercises: response.data }))
      .catch((error) => console.log("ERROR :" + error));
  }

  deleteHandler = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  };

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteHandler={this.deleteHandler}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Logged Exercises</h2>
        <table className="table">
          <thead className="table-head">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
