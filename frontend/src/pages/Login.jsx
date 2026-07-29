import { Link } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

function Login() {
  return (
    <AuthLayout>
      <AuthCard>
        <>
          <h1>Welcome Back</h1>

          <p>
            Login to continue using the illumination prediction platform.
          </p>

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <p className="forgot-password">
            <Link to="/forgot-password" className="login-link">
              Forgot Password?
            </Link>
          </p>

          <PrimaryButton text="Login" />

          <p className="login-text">
            Don't have an account?{" "}
            <Link to="/register" className="login-link">
              Register
            </Link>
          </p>
        </>
      </AuthCard>
    </AuthLayout>
  );
}

export default Login;