import React from "react";
// import propTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.isStudent ? "Yes he is" : "No he is not"}</p>
    </div>
  );
}

// Student.propTypes = {
//   name: propTypes.string.isRequired,
//   age: propTypes.number.isRequired,
//   isStudent: propTypes.bool.isRequired,
// };

export default Student;
