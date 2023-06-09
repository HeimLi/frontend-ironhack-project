import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // axios.post(`${API_URL}/auth/login`, requestBody

    authService.login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/Profile");
      })
      .catch((error) => {
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
  };
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <br />
      <form onSubmit={handleLoginSubmit}>
        <label> Email: </label>
        <input className="inField" type="email" name="email" value={email} onChange={handleEmail} />
       
        <label> Password: </label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <br />
        <br />
        <button className="a-button" href="/profile" type="submit"> Log in </button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
      <br />
      <p>Don't have an account yet?</p>
      <br />
      <a className="a-button" href="/signupPage"> Sign Up</a>
    </div>
  )
}

export default LoginPage;