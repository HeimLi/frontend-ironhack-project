import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <br />
      <h2>For what do you want to track?</h2>
      <br />
      <h3>Should I quit my job?</h3>
      <button><a href="/addMood">Start mood-tracking here.</a></button>
      <h3>Should I move?</h3>
      <button><a href="/addMood">Start mood-tracking here.</a></button>
      <h3>Do I have PMS?</h3>
      <button><a href="/addMood">Start mood-tracking here.</a></button>
      <br />
      <button><a href="/myMoods">My Moods</a></button>
      <br />
      <button><a href="/SignupPage">Logout</a></button>
    </div>
  );
};



export default Profile;