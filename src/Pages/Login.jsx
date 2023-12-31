import "../Pages/Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { login, setAuth } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  

  const loginBtn = async (e) => {
    e.preventDefault();

  

    if (!email || !password) {
      setErrorMessage("Please fill in all fields!");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    try {
      const response = await fetch(" http://localhost:7070/api/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.id > 0) {
          login(data);
          setAuth(true);
          setSuccessMessage("Login successful");
          setTimeout(() => setSuccessMessage(""), 3000);
          navigate("/home");
        } else {
          setErrorMessage("Invalid username or password");
          setTimeout(() => setErrorMessage(""), 3000);
        }
      } else {
        setErrorMessage("Invalid username or password");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    
    } catch (error) {
      console.error(error);
      setErrorMessage("Network error. Please try again later.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };




  return (
    <>
      <div className="con">
        <main className="wrapper">
          <strong style={{ color: "white", textAlign: "center", fontSize: 25 }}>
            <h1>Welcome back </h1>
            <h2 className="text-gray-100">
              Log in with your email and password{" "}
            </h2>
          </strong>
          {errorMessage && (
            <div className="message text-red-600">
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="blur-background"></div>

          <form>
            <div className="form-controls">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-controls">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bi bi-eye-slash" id="togglePassword"></i>
            </div>
            <button type="submit" className="submit" onClick={loginBtn}>
              Login
            </button>
            <p className="text-white p-5">
              <span className="border-b border-black mx-4 flex-1"></span>
              OR
              <span className="border-b border-black mx-4 flex-1"></span>
            </p>


<GoogleLogin
                  onSuccess={(credentialResponse) => {
                    var credentialResponseDecoded = jwtDecode(
                      credentialResponse.credential
                    );
                    setAuth(true);
                    // Store user information in your application state or context
                    login(credentialResponseDecoded);
                    navigate("/home");
                    console.log(credentialResponseDecoded);
                  }}
                  onError={() => {
                    console.log("Login failed");
                  }}
                  buttonText="Login with Google"
                  cookiePolicy={"single_host_origin"}
                  className="google-login-button"
                />            
            
            <a className="p-3" href="" style={{ color: "white" }}>
              Forgot password?
              <Link to="/">Reset here</Link>
            </a>
          </form>

          <p style={{ color: "white", textAlign: "center" }}>
            Don't have an account?
            <Link to="/SignUp">Sign up</Link>
          </p>
        </main>
      </div>
    </>
  );
};

export default Login;
