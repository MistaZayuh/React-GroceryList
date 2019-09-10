import React from "react";
import Groc from "./Groc";

const List = (props) => (
  <div>
    <h2>{ props.name }</h2>
    <ul>
      { props.grocs.map( item => <Groc {...item} handleClick={props.handleClick} /> ) }
    </ul>
  </div>
);

export default List;