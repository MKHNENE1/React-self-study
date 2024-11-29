/* eslint-disable react/prop-types */
import CartIcon from "./icons/CartIcon";

export default function Navbar({ noOfItems }) {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="px-1">
          <li>
            <a className="btn btn-ghost">
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
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
