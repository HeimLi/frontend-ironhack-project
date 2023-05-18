import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    
    authService.signup(requestBody)
      .then((response) => {
        navigate("/LoginPage");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
  
  return (
    <div className="SignupPage">
      <h1>Sign up</h1>
      <br />
      <form onSubmit={handleSignupSubmit}>
        <label> Email: </label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label> Password: </label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <br />
        <br />
        <button className="a-button" type="submit" >Signup</button>
        <br />
        <br />
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <br />
      <a className="a-button" href="/LoginPage">Login</a>
    </div>
  )
}

export default SignupPage;