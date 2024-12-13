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
      {state && <div>{state}</div>}
      <div className="w-fit mx-auto">
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
          <div>No items found</div>
        )}
      </div>
    </div>
  );
}
