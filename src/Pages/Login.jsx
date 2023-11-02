
// import React from 'react';




// function Login() {
//   return (
// <>
    
//     <div className="Wrapper bg-slate">

//     <div className="blur-background"></div>

//       <form action="#" className="flex justify-center items-center">
//         <div className="brand">
//           <img src="LoGo.png" alt="logo" />
//         </div>
//         <div className="error">
//           <span className="error-message"></span>
//         </div>
//         <div className="form-group">
//           <div className="input-group">
//             <label htmlFor="email"></label>
//             <input type="email" name="email" id="email" placeholder="Enter your email" />
//             <label htmlFor="password"></label>
//             <input type="password" name="password" id="password" placeholder="Password" />
//           </div>
//           <div className="input-group">
//             <button type="button">Sign In</button>
//           </div>
//         </div>
//         <small>
//           Sign up <a href="#">here</a>
//         </small>
//       </form>
//     </div>

//     </>
//   );
// }

// export default Login;




import '../Pages/Login.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const loginBtn = async (e) => {
        e.preventDefault();

        if (email === "" || email === null || password === "" || password === null) {
            setErrorMessage("Please fill all fields!!!")
            setTimeout(() => {
                setErrorMessage(errorMessage)
            }, 2000);
            return
        }

        try {
            const result = await fetch(`http://localhost:7070/api/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })

            const response = await result.json();
            if (result.status == 200) {
                navigate("/home");
                console.log(response.id);
            }
            if (result.status != 200) {
                setErrorMessage("Invalid username or password")
                setTimeout(() => {
                    setErrorMessage("")
                    setErrorMessage(errorMessage)
                }, 2000);
            }

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className='con'>
            <main className="wrapper">
                <strong style={{color: 'white', textAlign: 'center', fontSize: 25}} >
                <h1 >Welcome </h1>
                    </strong>
                {errorMessage && (
                    <div className="message">
                        <p>{errorMessage}</p>
                    </div>
                )

                }

  <div className="blur-background"></div>

  <form>
                    <div className="form-controls">
                       
                        <input type="email" name="email" placeholder="Email Address" id="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-controls">
                       
                        <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        <i className="bi bi-eye-slash" id="togglePassword"></i>
                    </div>

                    <button type="submit" className="submit" onClick={loginBtn}>Login</button>


                    <a href="" style={{color: 'white'}}>Forgot password?</a>
                </form>

                <p style={{color: 'white', textAlign: 'center'}}>
                    Don't have an account?
                    <Link to="/signup">
                        Sign up
                    </Link>
                </p>
            </main>
        </div >
    )
}

export default Login