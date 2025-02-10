/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router";
import CartItem from "./CartItem";

export default function Cart({
  items,
  handelClick,
  handelReset,
  handelDelete,
}) {
  const { state } = useLocation();
  // console.log(isLoggedIn);
  // console.log(state);

  return (
    <div>
      <div className="w-fit mx-auto">
        {/* {isLoggedIn && state ? <div>{state}</div> : ""} */}
        {items.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            name={item.name}
            count={item.count}
            handelClick={handelClick}
            handelDelete={handelDelete}
          ></CartItem>
        ))}
        {items.length > 0 ? (
          <div className="m-5 btn btn-error" onClick={handelReset}>
            Reset All
          </div>
        ) : (
          <div>
            No items found, Go to the{" "}
            <Link to={"/"} className="underline">
              Menu
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
