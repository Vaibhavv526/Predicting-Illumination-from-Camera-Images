import { useState } from "react";
import "../styles/ChangePasswordModal.css";

function ChangePasswordModal({ isOpen, onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  if (!isOpen) return null;

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
          >
            Update Password
          </button>
        </div>

      </div>
    </div>
  );
}

export default ChangePasswordModal;