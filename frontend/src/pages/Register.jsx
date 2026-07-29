import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";

import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  console.log(fullName);
  return (
    <AuthLayout>
      <AuthCard>
  <>
    <>
      <h1>Create Account</h1>

      <p>Sign up to access the illumination prediction platform.</p>

      <InputField
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

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

      <InputField
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
      />
      <PrimaryButton text="Create Account" />
      <p className="login-text">
        Already have an account?{" "}
        <Link to="/login" className="login-link">
          Login
        </Link>
      </p>
    </>
  </>
</AuthCard>
    </AuthLayout>
  );
}

export default Register;