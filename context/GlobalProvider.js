// import React, { createContext, useContext, useEffect, useState } from 'react'

// import { getCurrentUser } from '../lib/appwrite'

// // Creating a context to provide global state
// const GlobalContext = createContext()

// // Creating a custom hook to use the global context
// export const useGlobalContext = () => useContext(GlobalContext)

// // Creating a component to provide global state to the entire application
// const GlobalProvider = ({ children }) => {
//   // Setting up state variables
//   const [isLogged, setIsLogged] = useState(false) // State to track if user is logged in
//   const [user, setUser] = useState(null) // State to store current user data
//   const [loading, setLoading] = useState(true) // State to track loading state while fetching user data

//   // Fetching the current user data when the component mounts
//   useEffect(() => {
//     getCurrentUser()
//       .then(res => {
//         // If user data is returned, set isLogged to true and update user state
//         if (res) {
//           setIsLogged(true)
//           setUser(res)
//         } else {
//           // If no user data is returned, set isLogged to false and user to null.
//           setIsLogged(false)
//           setUser(null)
//         }
//       })
//       .catch(error => {
//         // Handle any errors that occur during the fetch operation.
//         console.log(error)
//       })
//       .finally(() => {
//         // Set loading state to false once fetch operation is completed.
//         setLoading(false)
//       })
//   }, []) // Empty dependency array ensures this effect runs only once when the component mounts.

//   // Providing the global state to the entire application via context provider
//   return (
//     <GlobalContext.Provider
//       value={{
//         isLogged,
//         setIsLogged,
//         user,
//         setUser,
//         loading
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   )
// }

// export default GlobalProvider
import React, { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;