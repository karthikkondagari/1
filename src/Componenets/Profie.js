import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/getUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        const userData = await response.json();
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error in fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          <div className="row mb-3">
            <div className="col-md-2"></div>
            <div className="col-md-10">
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <Link to="/" className="btn btn-primary btn-back">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default Profile;
