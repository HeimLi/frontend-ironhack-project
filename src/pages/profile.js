import {AuthContext} from "../context/auth.context";
import {useContext} from 'react';

const Profile = () => {
  const context = useContext(AuthContext);
  const user = context.user
  return (
    <div>
      <h1 style={{ display: 'none' }}>Profile</h1>
      <br />
      <h2>Start a moodboard!</h2>
      <br />
      <h4>Should I quit my job?</h4>
      <button><a href="/addMood">Start</a></button>
      <h3 style={{ display: 'none' }}>Should I move?</h3>
      <button style={{ display: 'none' }}><a href="/addMood">Track it.</a></button>
      <h3 style={{ display: 'none' }}>Should I get a pet?</h3>
      <button style={{ display: 'none' }}><a href="/addMood">Track it.</a></button>
      <br />
      <br />
      <button><a href="/myMoods">My moodboard.</a></button>
      <br />
      <br />
      <br />
      <h3>Profil</h3>
      <span>{user?.email}</span>
      <br />
      <button><a href="/changeEmail">Change Email</a></button>
      <br />
      <br />
      <button><a href="/SignupPage">Logout</a></button>
    </div>
  );
};

export default Profile;