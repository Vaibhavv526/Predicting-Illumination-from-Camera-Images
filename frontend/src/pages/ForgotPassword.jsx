import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

function ForgotPassword() {
    const navigate = useNavigate();

    
  return (
    <AuthLayout>
      <AuthCard>
        <>
          <h1>Forgot Password</h1>

          <p>
            Enter your registered email address and we'll send you a one-time
            password (OTP).
          </p>

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <PrimaryButton
            text="Send OTP"
            onClick={() => navigate("/verify-otp")}
          />

          <p className="login-text">
            Remember your password?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </>
      </AuthCard>
    </AuthLayout>
  );
}

export default ForgotPassword;