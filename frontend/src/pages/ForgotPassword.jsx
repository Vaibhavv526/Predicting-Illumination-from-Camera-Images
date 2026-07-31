import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { forgotPassword } from "../api/auth";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleForgotPassword = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const data = await forgotPassword(email);

    sessionStorage.setItem("reset_email", email);

    alert(data.message);

    navigate("/verify-otp");
  } catch (error) {
    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Something went wrong. Please try again.");
    }

    console.error(error);
  } finally {
    setLoading(false);
  }
};

    
  return (
    <AuthLayout>
      <AuthCard>
        <form onSubmit={handleForgotPassword}>
          <h1>Forgot Password</h1>

          <p>
            Enter your registered email address and we'll send you a one-time
            password (OTP).
          </p>

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PrimaryButton
            text="Send OTP"
            loading={loading}
          />

          <p className="login-text">
            Remember your password?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}

export default ForgotPassword;