/* eslint-disable react/prop-types */
import CartIcon from "./icons/CartIcon";
import NavBarLink from "./NavBarLink";

export default function Navbar({ noOfItems }) {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <NavBarLink
          to={"/"}
          classes="btn btn-ghost text-xl no-underline"
          label={"STUDY"}
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-3 px-1 text-xl">
          <li>
            <NavBarLink to={"/about"} label={"About"} />
          </li>
          <li>
            <NavBarLink to={"/contact"} label={"Contact Us"} />
          </li>
          <li>
            <NavBarLink to={"/login"} label={"Login"} />
          </li>
          <li>
            <NavBarLink
              to={"/"}
              label={
                <div className="indicator">
                  {noOfItems > 0 && (
                    <span className="indicator-item badge text-xs badge-secondary">
                      {noOfItems}
                    </span>
                  )}
                  <div className="place-items-center">
                    <CartIcon />
                  </div>
                </div>
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
