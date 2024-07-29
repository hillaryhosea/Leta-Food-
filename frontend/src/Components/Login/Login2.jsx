import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons";
export const Login2 = () => {
  return (
    <div className="container" id="container">
      <div className="form-container  sign-up-container">
        <form action="#">
          <h1>create an account</h1>
          <div className="social-contanier">
            <a className="social" href="#">
              <FaFacebook />
            </a>
            <a className="social" href="#">
              <FaLinkedin />
            </a>
            <a className="social" href="#">
              <FaInstagram />
            </a>
          </div>
          <span>or use email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
       </div>
       
       <div className="form-container sign-in-container">
          <form action="#">
            <h1>sign In</h1>
            <div className="social-container">
              <a className="social" href="#">
                <FaFacebook />
              </a>
              <a className="social" href="#">
                <FaLinkedin />
              </a>
              <a className="social" href="#">
                <FaInstagram />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Emai" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password</a>
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>welcome back</h1>
              <p>to keep connected with us login with your persona info</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                signUp
              </button>
            </div>
            
          </div>
        </div>
    </div>
  );
};
