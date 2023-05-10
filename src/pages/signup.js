import React from 'react';

const SignUp = () => {
  return (
    <div>
    <h1>SignUp</h1>
    <form>
    <label>
        Your Name: 
        <input type="text" name="name" />
    </label>
    <label>
        Your Age:
        <input type="number" name="name" />
    </label>
    <label>
        Your E-Mail:
        <input type="text" name="name" />
    </label>
    <label>
        Your Password:
        <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default SignUp;