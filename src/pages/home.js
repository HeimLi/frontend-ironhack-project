import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Not sure?</h1>
      <h1>Just track it.</h1>
      <br />
      <Link to={"/signupPage"}> Sign Up</Link>
      <br></br>
      <Link to={"/LoginPage"}> Log in</Link>
    </div>
  );
};

export default Home;