import {React, useState, createContext} from "react";

export const ResultContext = createContext()

export const ResultContextProvider = ({children}) => {
    const [result, setResult] = useState({})

    return(
        <ResultContext.Provider value={{result, setResult}}>
            {children}
        </ResultContext.Provider>
    )
}