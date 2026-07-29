import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const handleForgotPassword = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/auth/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          sessionStorage.setItem("reset_email", email);

          alert(data.message);

          navigate("/verify-otp");
        } else {
          alert(data.detail);
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

          <PrimaryButton text="Send OTP" />

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