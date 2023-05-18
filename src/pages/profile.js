import {AuthContext} from "../context/auth.context";
import {useContext} from 'react';

const Profile = () => {
  const context = useContext(AuthContext);
  const user = context.user
  return (
    <div>
      <h1 style={{ display: 'none' }}>Profile</h1>
      <br />
      <h2> Start a moodboard! </h2>
      <br />
      <h4> Should I quit my job? </h4>
      <br />
      <a className="a-button" href="/addMood"> Start tracking </a>
      <br />
      <br />
      <a className="important-button" href="/myMoods">My moodboard.</a>
      <br />
      <br />
      <br />
      <h3>Profile</h3>
      <span>{user?.email}</span>
      <br />
      <br />
      <a className="a-button" href="/changeEmail">Change Email</a>
      <br />
      <br />
      <a className="a-button" href="/SignupPage">Logout</a>
    </div>
  );
};

export default Profile;