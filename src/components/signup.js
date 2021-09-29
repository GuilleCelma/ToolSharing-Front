import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
 
function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
 
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
 
  
  const handleSignupSubmit = (e) => {};
 
  
  return (
    

    <div className="SignupPage">
 
      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />
 
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
 
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />
 
        <button type="submit">Sign Up</button>
      </form>
 
      { errorMessage && <p className="error-message">{errorMessage}</p> }
    </div>

  )
}
 
export default SignupPage;