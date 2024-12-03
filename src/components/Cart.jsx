/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
import CartItem from "./CartItem";

export default function Cart({
  items,
  handelClick,
  handelReset,
  handelDelete,
}) {
  const { state } = useLocation();
  return (
    <div>
      <div>{state}</div>
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
      <div className="m-5 btn btn-error" onClick={handelReset}>
        Reset All
      </div>
    </div>
  );
}
