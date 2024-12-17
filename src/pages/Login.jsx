/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handelLogin() {
    setIsLoggedIn(true);
    navigate("/", { state: "Hello from Login" });
  }

  return (
    <div onClick={handelLogin} className="btn btn-primary">
      Login
    </div>
  );
}
