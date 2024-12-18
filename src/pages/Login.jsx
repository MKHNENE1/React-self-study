/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import Email from "../components/icons/Email";
import Password from "../components/icons/Password";
import { useRef, useState } from "react";
import { object, string } from "yup";

const loginSchema = object({
  email: string().required(),
  password: string().required(),
});

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: null,
    password: null,
  });

  function handelLogin(e) {
    e.preventDefault();
    try {
      setError({ email: null, password: null });
      const x = loginSchema.validateSync(form, { abortEarly: false });
      console.log(x);
    } catch (err) {
      err.inner.forEach((errorItem) => {
        setError((prevError) => ({
          ...prevError,
          [errorItem.path]: errorItem.message,
        }));
      });
    }

    // setIsLoggedIn(true);
    // navigate("/", { state: "Hello from Login" });
  }

  function handelChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handelLogin} className="w-1/2 mx-auto">
      <div className="">
        <h1 className="text-2xl mb-3 font-bold w-fit mx-auto">Login</h1>
        <div className="mb-2">
          <label className="input input-bordered flex items-center gap-2">
            <Email />
            <input
              type="text"
              // ref={emailRef}
              className="grow"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handelChange}
            />
          </label>
          {error.email && (
            <span className="text-red-700 text-xs">Email is required</span>
          )}
        </div>
        <div className="mb-2">
          <label className="input input-bordered flex items-center gap-2">
            <div className="px-1">
              <Password />
            </div>
            <input
              name="password"
              type="password"
              className="grow"
              placeholder="Password"
              // ref={passRef}
              value={form.password}
              onChange={handelChange}
            />
          </label>
          {error.password && (
            <span className="text-red-700 text-xs">Password is required</span>
          )}
        </div>
      </div>
      <div className="">
        <div className="w-1/2 mx-auto">
          <button className="btn btn-primary w-full">Login</button>
        </div>
      </div>
    </form>
  );
}
