import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function Profile({ user }) {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : "",
    email: user?.email || "",
    dob: "",
    sport: "",
    dopingHistory: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleEdit = () => setIsEditing(prev => !prev);

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated.");
  };

  return (
    <div className="profile">
      <h2>Your Profile</h2>

      <div className="profile-details">

        <div className="profile-field">
          <label className="profile-label">Full Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="fullName"
              className="profile-input"
              value={formData.fullName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.fullName || "Not set"}</span>
          )}
        </div>

        <div className="profile-field">
          <label className="profile-label">Email:</label>
          <span>{formData.email}</span>
        </div>

        <div className="profile-field">
          <label className="profile-label">Date of Birth:</label>
          {isEditing ? (
            <input
              type="date"
              name="dob"
              className="profile-input"
              value={formData.dob}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.dob || "Not set"}</span>
          )}
        </div>

        <div className="profile-field">
          <label className="profile-label">Sport:</label>
          {isEditing ? (
            <input
              type="text"
              name="sport"
              className="profile-input"
              value={formData.sport}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.sport || "Not set"}</span>
          )}
        </div>

        <div className="profile-field">
          <label className="profile-label">Doping History:</label>
          {isEditing ? (
            <textarea
              name="dopingHistory"
              className="profile-input"
              rows={2}
              value={formData.dopingHistory}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.dopingHistory || "No history reported"}</span>
          )}
        </div>

        <div className="profile-field">
          <label className="profile-label">Bio:</label>
          {isEditing ? (
            <textarea
              name="bio"
              className="profile-input"
              rows={2}
              value={formData.bio}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.bio || "No bio added."}</span>
          )}
        </div>

        <div className="profile-field">
          <label className="profile-label">Edit Info</label>
          <FaPencilAlt className="profile-edit-icon" onClick={toggleEdit} />
        </div>
      </div>

      {isEditing && (
        <button className="button" onClick={handleSave}>
          Save Changes
        </button>
      )}
    </div>
  );
}
