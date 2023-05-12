import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1 style={{ display: 'none' }}>Profile</h1>
      <br />
      <h2>Decision? - Start a mood-collection.</h2>
      <br />
      <h3>Should I quit my job?</h3>
      <button><a href="/addMood">Track it.</a></button>
      <h3 style={{ display: 'none' }}>Should I move?</h3>
      <button style={{ display: 'none' }}><a href="/addMood">Track it.</a></button>
      <h3 style={{ display: 'none' }}>Should I get a pet?</h3>
      <button style={{ display: 'none' }}><a href="/addMood">Track it.</a></button>
      <br />
      <br />
      <button><a href="/myMoods">My collection.</a></button>
      <br />
      <button><a href="/SignupPage">Logout</a></button>
    </div>
  );
};



export default Profile;