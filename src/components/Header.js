import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
    <section className="logo">
      <h1>LOGO</h1>
    </section>
    <section id="navigation">

          <NavLink exact={true} activeClassName="is-active" to="/">
            Start
          </NavLink>
   
          <NavLink exact={true} activeClassName="is-active" to="/link1">
            Link 1
          </NavLink>

          <NavLink exact={true} activeClassName="is-active" to="/link2">
          Link 2
          </NavLink>
 
          <NavLink exact={true} activeClassName="is-active" to="/link3">
          Link 3
          </NavLink>
      
          <NavLink exact={true} activeClassName="is-active" to="/link4">
          Link 4
          </NavLink>

    </section>
    </>
  );
}
