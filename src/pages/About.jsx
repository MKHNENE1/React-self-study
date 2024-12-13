import { useState } from "react";
import { Link, Outlet } from "react-router";

export default function About() {
  const [active, setActive] = useState("n1");
  function changeActive(newValue) {
    setActive(newValue);
  }
  return (
    <div className="bg-slate-300 flex lg:justify-between flex-wrap mx-1">
      <aside className="w-1/3 min-w-fit flex-1">
        <ul className="menu bg-base-200 p-0 [&_li>*]:rounded-none">
          <li>
            <Link
              className={active == "n1" ? "active" : ""}
              onClick={() => changeActive("n1")}
              to={"/about"}
            >
              Link 1
            </Link>
          </li>
          <li>
            <Link
              className={active == "n2" ? "active" : ""}
              onClick={() => changeActive("n2")}
              to={"nested2"}
            >
              Link 2
            </Link>
          </li>
          <li>
            <Link
              className={active == "n3" ? "active" : ""}
              onClick={() => changeActive("n3")}
              to={"nested3"}
            >
              Link 3
            </Link>
          </li>
        </ul>
      </aside>
      <div className="w-2/3 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
