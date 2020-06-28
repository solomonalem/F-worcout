import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link className="icon-edit" to={"/edit/" + props.exercise._id}>
        <FontAwesomeIcon icon="edit" />
      </Link>
      |
      <a
        className="icon-delete"
        href="#"
        onClick={() => {
          props.deleteHandler(props.exercise._id);
        }}
      >
        <FontAwesomeIcon icon="trash-alt" />
      </a>
    </td>
  </tr>
);
export default exercise;
