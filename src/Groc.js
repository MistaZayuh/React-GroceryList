import React from "react";

const Groc = ({ id, name, bought, handleClick, }) => (
  <li 
    key={ id } 
    style={ bought ? { ...styles.groc, ...styles.bought } : styles.groc }
    onClick={() => handleClick(id) }
    >
    { name }
  </li>
);
const styles = {
  groc: {
    cursor: "pointer",
  },
  bought: {
    color: "grey",
    textDecoration: "line-through",
  }
};
export default Groc;