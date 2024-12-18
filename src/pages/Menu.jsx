import AddToCart from "../components/AddToCart";

/* eslint-disable react/prop-types */
export default function Menu({ items, handelAddToCart }) {
  return (
    <div className="grid grid-cols-3">
      {/* Left */}
      <div className="text-center text-lg">Filter</div>
      {/* Right */}
      <div className="grid col-span-2">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td> {item.price} EGP</td>
                  <td>
                    <AddToCart
                      isInCart={item.isInCart}
                      id={item.id}
                      handelAddToCart={handelAddToCart}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
