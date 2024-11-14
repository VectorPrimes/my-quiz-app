import {React, useState, createContext} from "react";

export const UserNameContext = createContext();

export const MyProvider = ({children}) => {
    const [userName, setUserName] = useState("")

    return(
        <UserNameContext.Provider value={{userName, setUserName}}>
            {children}
        </UserNameContext.Provider>
    )
}