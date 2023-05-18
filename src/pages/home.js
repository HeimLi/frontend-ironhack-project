import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Not sure?</h1>
      <h1>Just track it.</h1>
      <br />
      <a className="a-button" href="/signupPage"> Sign Up</a>
      <br></br>
      <br />
      <a className="a-button" href="/LoginPage"> Log in</a>
    </div>
  );
};

export default Home;