import React, { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
export const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthProvider = (props) => {

  const [isAuthenticated, setAuthenticated] = useState(() => {
    const token = localStorage.FBidToken;
    console.log('this is token:', token);
    if (!token) {
      return false
    }
    try {
      const { exp } = jwtDecode(token)
      if (exp < new Date().getTime() / 1000) {
        console.log('token just expired');
        localStorage.clear();
        localStorage.removeItem(localStorage.FBidToken)
        return false;
      }
    } catch (err) {
      console.log('eroor: ', err);
    }
    // userName = jwtDecode(token).email.split('@')[0];
    // console.log('token is valid, user is : ', userName);
    // axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/user', {
    //     headers: {
    //         'Authorization': `${localStorage.FBidToken}`
    //     }
    // })
    //     .then((res) => {
    //         console.log("OVO JE REZULTAT:", res.data)
    //         setUser(res.data.credentials.handle)
    //         console.log("USER DATA", userData);
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })
    return true;
  });

  return (
    <Provider value={[isAuthenticated, setAuthenticated]}>
      {props.children}
    </Provider>
  );
}
