/* eslint-disable react/prop-types */
import Trash from "./icons/Trash";

export default function CartItem({
  name,
  count,
  handelClick,
  handelDelete,
  item,
}) {
  return (
    <div className="flex items-center gap-3 p-5 flex-wrap">
      <div className="min-w-32 capitalize">{name}</div>
      <div className="bg-slate-500 text-white rounded-lg py-3 px-[18px]">
        {count}
      </div>
      <div className="btn btn-accent" onClick={() => handelClick(1, item)}>
        +
      </div>
      <div
        className="btn btn-warning"
        onClick={() => {
          count != 0 && handelClick(-1, item);
        }}
      >
        -
      </div>
      <div
        className="btn btn-primary"
        onClick={() => {
          count != 0 && handelClick(-count, item);
        }}
      >
        Reset
      </div>
      <div className="btn btn-error" onClick={() => handelDelete(item.id)}>
        <Trash />
      </div>
    </div>
  );
}
