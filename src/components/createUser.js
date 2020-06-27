import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    username: "",
  };

  usernameHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  };
  render() {
    return (
      <div className="container">
        <h2>Create New User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-item">
            <label>Username </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.usernameHandler}
            />
          </div>
          <div className="form-item">
            <input type="submit" value="Create " className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
