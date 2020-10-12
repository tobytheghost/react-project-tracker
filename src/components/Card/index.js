import React from "react";

//Styles
import "./Card.scss";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;
