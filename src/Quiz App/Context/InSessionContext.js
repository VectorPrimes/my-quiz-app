import {React, useState, createContext} from "react";

export const InSessionContext = createContext();

export const InSessionProvider = ({children}) => {
    const [inSession, setInSession] = useState("false")

    return(
        <InSessionContext.Provider value={{inSession, setInSession}}>
            {children}
        </InSessionContext.Provider>
    )
}