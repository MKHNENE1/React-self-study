import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  function handelLogin() {
    navigate("/", { state: "Hello from Login" });
  }

  return (
    <div onClick={handelLogin} className="btn btn-primary">
      Login
    </div>
  );
}
