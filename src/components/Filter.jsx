/* eslint-disable react/prop-types */
export default function Filter({
  categories,
  selectedCategory,
  handleSelectCategory,
}) {
  return (
    <div className="relative w-full">
      <div className="sticky top-9 w-96 text-lg">
        {categories.map((category, index) => (
          <div
            onClick={() => handleSelectCategory(category.id)}
            className={`w-full duration-300 border border-t-0 cursor-pointer ${
              index === 0 && " border-t"
            } p-1 ${selectedCategory === category.id && "bg-slate-300"}`}
            key={index}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}
