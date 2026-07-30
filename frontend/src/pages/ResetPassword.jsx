import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const email = sessionStorage.getItem("reset_email");
  const otp = sessionStorage.getItem("reset_otp");

 const handleResetPassword = async (e) => {
  e.preventDefault();


  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const response = await fetch(
  "http://127.0.0.1:8000/auth/reset-password",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      otp: otp,
      new_password: newPassword,
    }),
  }
);

const data = await response.json();



if (response.ok) {
  alert(data.message);

  sessionStorage.removeItem("reset_email");
  sessionStorage.removeItem("reset_otp");

  navigate("/login");
} else {
  alert(JSON.stringify(data));
}
};

  return (
    <AuthLayout>
      <AuthCard>
        <form onSubmit={handleResetPassword}>
          <h1>Reset Password</h1>

          <p>
            Enter your new password below to complete the password reset
            process.
          </p>
          <InputField
            label="New Password"
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            helperText="ⓘ Use at least 8 characters."
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <PrimaryButton text="Reset Password" />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}

export default ResetPassword;