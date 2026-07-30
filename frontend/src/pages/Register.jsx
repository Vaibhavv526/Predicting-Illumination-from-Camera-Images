import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";

import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();
  

  const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const response = await fetch("http://127.0.0.1:8000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: fullName,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  console.log("Status:", response.status);
  console.log(JSON.stringify(data, null, 2));

  if (response.ok) {
    alert("Registration Successful!");
    navigate("/login");
  } else {
    alert(data.detail);
  }
};
  return (
    <AuthLayout>
      <AuthCard>
  
    <form onSubmit={handleRegister}>
      <h1>Create Account</h1>

      <p>Sign up to access the illumination prediction platform.</p>

      <InputField
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            emailRef.current.focus();
          }
        }}
      />

      <InputField
        ref={emailRef}
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            passwordRef.current.focus();
          }
        }}
      />

      <InputField
        ref={passwordRef}
         label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText="ⓘ Use at least 8 characters."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            confirmPasswordRef.current.focus();
          }
        }}
      />

      <InputField
        ref={confirmPasswordRef}
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <PrimaryButton text="Create Account" />
      <p className="login-text">
        Already have an account?{" "}
        <Link to="/login" className="login-link">
          Login
        </Link>
      </p>
    </form>
  
</AuthCard>
    </AuthLayout>
  );
}

export default Register;