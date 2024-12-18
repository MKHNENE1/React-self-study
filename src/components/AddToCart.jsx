/* eslint-disable react/prop-types */
import CartIcon from "./icons/CartIcon";
export default function AddToCart({ isInCart, id, handelAddToCart }) {
  return (
    <div
      className="cursor-pointer btn btn-ghost"
      onClick={() => handelAddToCart(id)}
    >
      <CartIcon isInCart={isInCart} />
    </div>
  );
}
