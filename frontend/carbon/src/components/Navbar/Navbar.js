import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ userId }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const response = await fetch(`/profile-photo/${userId}/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setProfilePhoto(imageObjectURL);
      } catch (error) {
        console.error("Error fetching profile photo:", error);
      }
    };

    fetchProfilePhoto();
  }, [userId]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {profilePhoto && (
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        )}
      </div>
      <div className="navbar-center">
        <h1>Carbon Credits</h1>
      </div>
      <div className="navbar-right">
        <button className="nav-button">Trade</button>
        <button className="nav-button">Wallet</button>
        <button className="nav-button">Settings</button>
      </div>
    </nav>
  );
};

export default Navbar;
