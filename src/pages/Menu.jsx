/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useState } from "react";
import AddToCart from "../components/AddToCart";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

export default function Menu({
  items,
  handelAddToCart,
  categories,
  selectedCategory,
  handleSelectCategory,
  noOfPages,
  currentPage,
  handleChangeCurrentPage,
  handleSearch,
}) {
  const [searchError, setSearchError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searctValue, setSearchValue] = useState("");
  function checkOnSearch(value) {
    const regex = /[-!@#\$%\^&\*\(\)\{\}\[\]"';:\?/\\.,<>+]/;
    setLoading(true);
    regex.test(value)
      ? setSearchError(true) + setLoading(false)
      : setSearchError(false) +
        setTimeout(() => {
          handleSearch(value);
          setLoading(false);
        }, 2000);
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* Left */}
      <Filter
        setLoading={setLoading}
        handleSelectCategory={handleSelectCategory}
        categories={categories}
        selectedCategory={selectedCategory}
      />
      {/* Right */}
      <div className="col-span-2">
        <div className="grid">
          <div className="relative flex justify-center my-3">
            <input
              type="text"
              placeholder="Search by name"
              className="p-3 pe-6 border-b-2 border-black outline-none w-2/3"
              value={searctValue}
              // onBlur={(inp) => checkOnSearch(inp.target.value)}
              onInput={(inp) => {
                setSearchValue(inp.target.value);
                checkOnSearch(inp.target.value);
              }}
            />
            <div className="flex items-center relative right-5 h-full">
              <span
                onClick={() => {
                  searctValue.length != 0 &&
                    setSearchValue("") + checkOnSearch("");
                }}
                className="h-4 w-4 flex justify-center items-center hover:shadow-sm hover:shadow-black duration-300 cursor-pointer text-xs capitalize bg-black text-white rounded-full"
              >
                x
              </span>
            </div>
          </div>
          {searchError && (
            <span className="mx-auto mb-3 text-red-600 font-normal">
              Enter Valid Search Value
            </span>
          )}
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
                {loading ? (
                  <tr>
                    <td className="bg-slate-100" colSpan={4}>
                      <span className="loading loading-dots loading-lg"></span>
                    </td>
                  </tr>
                ) : items.length ? (
                  items.map((item, index) => (
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
                  ))
                ) : (
                  <tr>
                    <td className="bg-slate-100" colSpan={4}>
                      No Data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {!loading && noOfPages > 1 && (
            <Pagination
              setLoading={setLoading}
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
