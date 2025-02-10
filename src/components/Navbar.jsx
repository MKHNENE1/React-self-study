/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartIcon from "./icons/CartIcon";
import NavBarLink from "./NavBarLink";
import { UserContext } from "../contexts/UserContext";

export default function Navbar({ noOfItems }) {
  const { user, isLogedIn, logOut } = useContext(UserContext);

  return (
    <div className="navbar bg-base-300">
      <div className="container mx-auto">
        <div className="navbar-start justify-between flex flex-wrap w-full">
          <NavBarLink
            to={"/"}
            classes="btn btn-ghost text-xl no-underline"
            label={"STUDY"}
          />
          <div className="w-fit flex lg:hidden gap-[4px]">
            <div className="btn btn-ghost lg:hidden">
              <NavBarLink
                to={"/cart"}
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
                  {isLogedIn ? (
                    <div
                      tabIndex={0}
                      role="button"
                      className="dropdown dropdown-end"
                    >
                      <div className="btn btn-sm btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm overflow-hidden dropdown-content top-11 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                      >
                        <li className="my-1 overflow-hidden">
                          <p>Welcome {user.email.split("@")[0]}</p>
                        </li>
                        <li>
                          <NavBarLink
                            click={() => logOut()}
                            to={"/"}
                            label={"Logout"}
                            classes={"no-underline"}
                          />
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <NavBarLink to={"/login"} label={"Login"} />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex w-full">
          <ul className="menu menu-horizontal items-center gap-3 text-lg">
            <li>
              <NavBarLink to={"/about"} label={"About"} />
            </li>
            <li>
              <NavBarLink to={"/contact"} label={"Contact Us"} />
            </li>
            <li>
              {isLogedIn ? (
                <div
                  tabIndex={0}
                  role="button"
                  className="dropdown dropdown-end"
                >
                  <div className="btn btn-sm btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm overflow-hidden dropdown-content top-11 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li className="my-1 overflow-hidden">
                      <p>Welcome {user.email.split("@")[0]}</p>
                    </li>
                    <li>
                      <NavBarLink
                        click={() => logOut()}
                        to={"/"}
                        label={"Logout"}
                        classes={"no-underline"}
                      />
                    </li>
                  </ul>
                </div>
              ) : (
                <NavBarLink to={"/login"} label={"Login"} />
              )}
            </li>
            <li>
              <NavBarLink
                to={"/cart"}
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
