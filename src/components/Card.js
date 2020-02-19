import React from 'react';
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">

      <div>
        <div className="icon"><h5>icon</h5></div>
        <div>
        <h2 className="title">{props.title}</h2>
        {props.children}
        <p>
          <NavLink to={{pathname: props.link}}>Start here</NavLink>
        </p>
        </div>
      </div>
    </div>
  );
}