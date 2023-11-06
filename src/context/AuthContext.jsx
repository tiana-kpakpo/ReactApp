// import React, { createContext, useContext, useEffect, useState } from "react";
// // import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthProvider)

// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const isUserAuth = async () => {
//   //     try {
//   //       const response = await fetch('http://localhost:7070/api/login', {
//   //         method: 'GET',
//   //       });
//   //       if (response.ok) {
//   //         const userData = await response.json();
//   //         setCurrentUser(userData);
//   //       } else {
//   //         setCurrentUser(null);
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   isUserAuth();
//   // }, []);

//   const login = async (credentials) => {
//     try{
//       const response = await fetch('http://localhost:7070/api/login', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//         body: JSON.stringify(credentials)
//     })

//     if (response.ok) {
//       const userData = await response.json();
//       setCurrentUser(userData);
//       navigate ('/home')
//     } else {
//       setCurrentUser(null);
//     }

//     }catch(error){
//       console.log(error)
//     }
    
//   };

//   const logout = () => {
//     setCurrentUser(null);
//   };

//   const values = {
//     currentUser,login,logout
//   }
//   return (
//     <AuthContext.Provider value={values}>
//       {children}
//     </AuthContext.Provider>
//   );
// }



// import { createContext, useState } from "react"

// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState([''])
//     const [auth, setAuth] = useState(false)

//     const login = (response) => {
//         setCurrentUser(response)
//     }

//     const logout = () => {
//         setCurrentUser(null)
//     }

//     const info = {
//         auth,
//         setAuth,
//         currentUser,
//         setCurrentUser,
//         login,
//         logout,
//     }

//     return (
//         <AuthContext.Provider value={info}>
//             {children}
//         </AuthContext.Provider>
//     )
// }


import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider =  ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  const login = (response) => {
    setUser(response);
  }

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setAuth, setUser, auth }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;