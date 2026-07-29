import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const email = sessionStorage.getItem("reset_email");

  const handleVerifyOTP = async (e) => {
  e.preventDefault();

  const response = await fetch("http://127.0.0.1:8000/auth/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      otp: otp,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    sessionStorage.setItem("reset_otp", otp);

    alert(data.message);

    navigate("/reset-password");
  } else {
    alert(data.detail);
  }
};
  return (
    <AuthLayout>
     <AuthCard>
      <form onSubmit={handleVerifyOTP}>
        <h1>Verify OTP</h1>

        <p>
          Enter the 6-digit OTP sent to your registered email address.
        </p>

        <InputField
          label="OTP"
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <PrimaryButton text="Verify OTP" />
      </form>
    </AuthCard>
    </AuthLayout>
  );
}

export default VerifyOTP;