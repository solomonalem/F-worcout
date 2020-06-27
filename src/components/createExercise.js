import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: null,
    date: new Date(),
    users: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  usernameHandler = (e) => {
    this.setState({ username: e.target.value });
  };
  descriptionHandler = (e) => {
    this.setState({ description: e.target.value });
  };
  durationHandler = (e) => {
    this.setState({ duration: e.target.value });
  };
  dateHandler = (date) => {
    this.setState({ date: date });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <h2>Create New Exercise </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-item">
            <label>Username </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.usernameHandler}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-item">
            <label>Description </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.descriptionHandler}
            />
          </div>
          <div className="form-item">
            <label>Duration (in minutes) </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.durationHandler}
            />
          </div>
          <div className="form-item">
            <label>Date </label>
            <div className="date-picker">
              <DatePicker
                selected={this.state.date}
                onChange={this.dateHandler}
              />
            </div>
          </div>

          <div className="form-item">
            <input type="submit" value="Create " className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
