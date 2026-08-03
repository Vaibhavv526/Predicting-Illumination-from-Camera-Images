import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { login } from "../api/auth";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [copyMessage, setCopyMessage] = useState("");

const demoEmail = "demo@gmail.com";
const demoPassword = "Demo@123";

  const navigate = useNavigate();

  const copyToClipboard = async (text, label) => {
  try {
    await navigator.clipboard.writeText(text);

    setCopyMessage(`${label} copied to clipboard!`);

    setTimeout(() => {
      setCopyMessage("");
    }, 2000);

  } catch (err) {
    console.error(err);
  }
};

    const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const data = await login(email, password);

    localStorage.setItem(
      "access_token",
      data.access_token
    );

    alert("Login Successful!");

    navigate("/dashboard");

  } catch (error) {

    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Unable to connect to the server.");
    }

    console.error(error);
  }
};
   
  return (
    <AuthLayout>
      <AuthCard>
  <form onSubmit={handleLogin}>
    <h1>Welcome Back</h1>

    <p>
      Login to continue using the illumination prediction platform.
    </p>

    <InputField
      label="Email"
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <InputField
      label="Password"
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <p className="forgot-password">
      <Link to="/forgot-password" className="login-link">
        Forgot Password?
      </Link>
    </p>

    <PrimaryButton text="Login" />
    <div className="demo-account-card">
  <h3>🔑 Demo Account</h3>

  <p className="demo-description">
    Want to explore the application without creating a new account?
  </p>

  <div className="demo-credential">
    <strong>📧 Email</strong>
    <span>{demoEmail}</span>
    <button
      type="button"
      onClick={() => copyToClipboard(demoEmail, "Email")}
    >
      📋 Copy Email
    </button>
  </div>

  <div className="demo-credential">
    <strong>🔒 Password</strong>
    <span>{demoPassword}</span>
    <button
      type="button"
      onClick={() => copyToClipboard(demoPassword, "Password")}
    >
      📋 Copy Password
    </button>
  </div>

  <p className="demo-note">
  💡 Use these credentials to quickly explore the application.
    </p>

    {copyMessage && (
      <p className="copy-message">
        ✅ {copyMessage}
      </p>
    )}
</div>

    <p className="login-text">
      Don't have an account?{" "}
      <Link to="/register" className="login-link">
        Register
      </Link>
    </p>
  </form>
</AuthCard>
    </AuthLayout>
  );
}

export default Login;