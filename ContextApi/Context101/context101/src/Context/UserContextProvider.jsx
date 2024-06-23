import React from "react";
import userContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    const [details, setDetails] = React.useState({});
    return (
        <userContext.Provider value = {{user, setUser, details, setDetails}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;