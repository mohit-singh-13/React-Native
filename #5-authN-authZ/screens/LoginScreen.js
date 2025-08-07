import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/authContext";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    const token = await loginUser(email, password);
    authenticate(token);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message={"Verifying..."} />;
  }

  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;
}

export default LoginScreen;
