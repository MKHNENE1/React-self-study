import { NavLink } from "react-router";

export default function NavBarLink({ to, classes, label }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `underline ${classes}` : `no-underline ${classes}`
      }
      to={to}
    >
      {label}
    </NavLink>
  );
}
