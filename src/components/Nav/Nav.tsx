import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/userList">user list</NavLink>
      </li>
      <li>
        <NavLink to="/userList/1">user</NavLink>
      </li>
    </ul>
  </nav>
);
