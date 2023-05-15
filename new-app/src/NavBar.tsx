import { NavLink } from "react-router-dom";

import "./App.css";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink exact to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
export {};