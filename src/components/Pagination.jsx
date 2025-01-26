/* eslint-disable react/prop-types */
import { getArrayFromNumber } from "../utils/getArrayFromNumber";

export default function Pagination({
  noOfPages,
  currentPage,
  handleChangeCurrentPage,
}) {
  const pages = getArrayFromNumber(noOfPages);
  return (
    <div className={`flex justify-center gap-2 my-10`}>
      {pages.map((page, index) => (
        <div
          onClick={() => handleChangeCurrentPage(page)}
          key={index}
          className={`w-8 h-w-8 border-2 flex justify-center items-center duration-300 cursor-pointer ${
            currentPage === page && "bg-slate-300"
          }`}
        >
          {page}
        </div>
      ))}
    </div>
  );
}
