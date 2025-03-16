import { useNavigate } from "react-router-dom";
import { useLogin } from "../features/authentication/useLogin";
import Spinner from "./Spinner";

function Demo() {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  login({ email: "test@user.com", password: "12345678" });

  navigate("/dashboard");
}

export default Demo;
