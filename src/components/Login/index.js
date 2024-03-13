import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]); 

  const handleFacebookLogin = () => {

  }

  return (
    <div className="login">
      <div className="login__container"> 
      <h1 className="login-heading">Login</h1>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button> 
        <div className='row-lines'>
                  <hr width="120px" size="2"></hr> 
                  <p>OR</p>
                  <hr width="120px" size="2"></hr> 

               </div>
        <div className='social-buttons'>
                <button className='google-button' onClick={signInWithGoogle}>
                  <img
                    src='https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703231079/R.27fa9f7a7ce6789c74f3679be56786c8_yfkeia.jpg'
                    alt='Google Logo'
                  />
                  Login with Google
                </button>
                <button className='facebook-button' onClick={handleFacebookLogin}>
                  <img
                    src='https://img.freepik.com/premium-photo/facebook-application-logo-3d-rendering-white-background_41204-6939.jpg'
                    alt='Facebook Logo'
                  />
                   Login with Facebook
                </button>
                
        </div>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign up  </Link> now.
        </p>
      </div>
    </div>
  );
}

export default Login;