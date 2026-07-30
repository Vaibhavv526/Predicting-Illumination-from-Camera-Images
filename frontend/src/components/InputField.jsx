import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../styles/InputField.css";

const InputField = forwardRef(({
  label,
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="input-group">
      <label className="input-label">
        {label}
      </label>

      <div className="input-wrapper">
  <input
    ref={ref}
    className="input-field"
    type={
      type === "password"
        ? (showPassword ? "text" : "password")
        : type
    }
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />

  {type === "password" && (
    <button
      type="button"
      className="password-toggle"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </button>
  )}
</div>
      
    </div>
  );
});

export default InputField;