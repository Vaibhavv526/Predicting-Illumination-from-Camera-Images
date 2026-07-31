import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { verifyOTP } from "../api/auth";

function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const email = sessionStorage.getItem("reset_email");

 const handleVerifyOTP = async (e) => {
  e.preventDefault();

  try {
    const data = await verifyOTP(email, otp);

    sessionStorage.setItem("reset_otp", otp);

    alert(data.message);

    navigate("/reset-password");
  } catch (error) {
    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Something went wrong. Please try again.");
    }

    console.error(error);
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