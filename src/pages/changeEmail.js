import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from "../context/auth.context";

function UserProfile() {
  const context = useContext(AuthContext);
  const user = context.user;
  const [email, setEmail] = useState(user?.email || ''); // Initialer Wert auf leeren String setzen
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = process.env.REACT_APP_SERVER_URL

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveEmail = () => {
    const token = localStorage.getItem("authToken");      
    axios.put(`${API_URL}/api/user/` + user._id + '/email', { email }, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setIsEditing(false);
      })
      .catch(error => {
      });
  };

  return (
    <div>
      <h1>User Profile</h1>
      {isEditing ? (
        <div>
          <br />
          <label> Email: </label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <br />
          <br />
          <button className="a-button" onClick={handleSaveEmail}> Save </button>
        </div>
      ) : (
        <div>
          <span>Email: {user?.email}</span>
          <br />
          <button className="a-button" onClick={() => setIsEditing(true)}>Edit</button>
          <br />
          <br />
          <a className="a-button" href="/Profile">Back to Profile</a>
          <br />
          <br />
          <a className="a-button" href="/SignupPage">Logout</a>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
