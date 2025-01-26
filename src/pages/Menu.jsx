import AddToCart from "../components/AddToCart";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

/* eslint-disable react/prop-types */
export default function Menu({
  items,
  handelAddToCart,
  categories,
  selectedCategory,
  handleSelectCategory,
  noOfPages,
  currentPage,
  handleChangeCurrentPage,
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* Left */}
      <Filter
        handleSelectCategory={handleSelectCategory}
        categories={categories}
        selectedCategory={selectedCategory}
      />
      {/* Right */}
      <div className="col-span-2">
        <div className="grid">
          <div className="overflow-x-auto">
            <table className="table text-center">
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

          {noOfPages > 1 && (
            <Pagination
              handleChangeCurrentPage={handleChangeCurrentPage}
              currentPage={currentPage}
              noOfPages={noOfPages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
