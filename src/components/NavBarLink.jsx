/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

export default function NavBarLink({ to, classes, label, click }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `underline ${classes}` : `no-underline ${classes}`
      }
      to={to}
      onClick={click}
    >
      {label}
    </NavLink>
  );
}
