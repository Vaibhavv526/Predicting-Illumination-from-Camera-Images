import { useState } from "react";
import "../styles/ChangePasswordModal.css";
import { changePassword } from "../api/auth";

function ChangePasswordModal({ isOpen, onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  if (!isOpen) return null;
  const handleUpdatePassword = async () => {
  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const data = await changePassword(
      currentPassword,
      newPassword
    );

    alert(data.message);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    onClose();

  } catch (error) {
    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Unable to change password.");
    }

    console.error(error);
  }
};

  return (
    <div className="modal-overlay">
      <div className="change-password-modal">

        <h2>Change Password</h2>

        <p>
          Enter your current password and choose a new password.
        </p>

        <div className="modal-field">
          <label>Current Password</label>

          <input
            type="password"
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
          />
        </div>

        <div className="modal-field">
          <label>New Password</label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
          />
        </div>

        <div className="modal-field">
          <label>Confirm Password</label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />
        </div>

        <div className="modal-actions">
          <button
            className="cancel-button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
          className="save-button"
          onClick={handleUpdatePassword}
        >
          Update Password
        </button>
        </div>

      </div>
    </div>
  );
}

export default ChangePasswordModal;