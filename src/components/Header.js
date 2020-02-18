import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
    <section className="logo">
      LOGO
    </section>
    <section id="navigation">
      <ul>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/tool1">
            Tool 1
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/tool2">
            Tool 2
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/tool3">
            Tool 3
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/tool4">
            Tool 4
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/help">
            Help
          </NavLink>
        </li>
      </ul>
    </section>
    </>
  );
}
