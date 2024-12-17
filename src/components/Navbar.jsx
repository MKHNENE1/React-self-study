/* eslint-disable react/prop-types */
import CartIcon from "./icons/CartIcon";
import NavBarLink from "./NavBarLink";

export default function Navbar({ noOfItems, isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="navbar bg-base-300">
      <div className="container mx-auto">
        <div className="navbar-start justify-between flex w-full">
          <NavBarLink
            to={"/"}
            classes="btn btn-ghost text-xl no-underline"
            label={"STUDY"}
          />
          <div className="w-fit flex lg:hidden gap-[4px]">
            <div className="btn btn-ghost lg:hidden">
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
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavBarLink to={"/about"} label={"About"} />
                </li>
                <li>
                  <NavBarLink to={"/contact"} label={"Contact Us"} />
                </li>
                <li>
                  {isLoggedIn ? (
                    <NavBarLink
                      click={() => setIsLoggedIn(false)}
                      to={"/"}
                      label={"Logout"}
                      classes={"no-underline"}
                    />
                  ) : (
                    <NavBarLink to={"/login"} label={"Login"} />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex w-full">
          <ul className="menu menu-horizontal gap-3 text-lg">
            <li>
              <NavBarLink to={"/about"} label={"About"} />
            </li>
            <li>
              <NavBarLink to={"/contact"} label={"Contact Us"} />
            </li>
            <li>
              {isLoggedIn ? (
                <NavBarLink
                  click={() => setIsLoggedIn(false)}
                  to={"/"}
                  label={"Logout"}
                  classes={"no-underline"}
                />
              ) : (
                <NavBarLink to={"/login"} label={"Login"} />
              )}
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
    </div>
  );
}
