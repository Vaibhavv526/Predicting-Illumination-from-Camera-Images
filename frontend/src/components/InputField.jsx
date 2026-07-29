import { forwardRef } from "react";
import "../styles/InputField.css";

const InputField = forwardRef(({
  label,
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
}, ref) => {
  return (
    <div className="input-group">
      <label className="input-label">
        {label}
      </label>

      <input
        ref={ref}
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});

export default InputField;