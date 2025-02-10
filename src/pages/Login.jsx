import { useNavigate } from "react-router";
import Email from "../components/icons/Email";
import Password from "../components/icons/Password";
import { useContext, useState } from "react";
import { object, string } from "yup";
import { UserContext } from "../contexts/UserContext";

const loginSchema = object({
  email: string().email().required(),
  password: string().min(4).required().max(6),
});

export default function Login() {
  const { login } = useContext(UserContext);
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
      login(x);
      navigate("/");
    } catch (err) {
      err.inner.forEach((errorItem) => {
        setError((prevError) => ({
          ...prevError,
          [errorItem.path]: errorItem.message,
        }));
      });
    }
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
              className="grow"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handelChange}
            />
          </label>
          {error.email && (
            <span className="text-red-700 text-xs">{error.email}</span>
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
              value={form.password}
              onChange={handelChange}
            />
          </label>
          {error.password && (
            <span className="text-red-700 text-xs">{error.password}</span>
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
