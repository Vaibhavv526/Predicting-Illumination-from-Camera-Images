import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

function VerifyOTP() {
  return (
    <AuthLayout>
      <AuthCard>
        <>
          <h1>Verify OTP</h1>

          <p>
            Enter the 6-digit OTP sent to your registered email address.
          </p>

          <InputField
            label="OTP"
            type="text"
            placeholder="Enter OTP"
          />

          <PrimaryButton text="Verify OTP" />
        </>
      </AuthCard>
    </AuthLayout>
  );
}

export default VerifyOTP;