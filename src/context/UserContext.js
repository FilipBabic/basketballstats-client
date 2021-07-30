import React, { createContext, useState } from "react";
import axios from 'axios';
export const UserContext = createContext();

const { Provider } = UserContext;

export const UserProvider = (props) => {

    const [userName, setUserName] = useState(() => {
        let token = localStorage.FBidToken
        if (!token) {
            return ""
        }
        axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/user', {
            headers: {
                'Authorization': `${localStorage.FBidToken}`
            }
        }).then((res) => {
            let user = res.data.credentials.handle.charAt(0).toUpperCase() + res.data.credentials.handle.slice(1)
            setUserName(user)
        }).catch((error) => {
            console.error(error)
        })
    });

    return (
        <Provider value={[userName, setUserName]}>
            {props.children}
        </Provider>
    );
}
