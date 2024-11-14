import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"
import {UserNameContext} from "../Context/Context"

function Intro(){
    const {userName, setUserName} = useContext(UserNameContext)
    
    const navigate = useNavigate()

    function proceed(){
        userName === "" ? alert("Please fill in a name") : navigate("/info")
        
        return
    }

    function updateName(event) {
        setUserName(() => {
            const {value} = event.target

            return (value)
        })
    }
    
    return (
        <div className="intro">
            <h3 className="intro--welcome">Welcome to my first major <code>React</code> project</h3>
            <h1 className="intro--h1">Government Quiz App</h1>
            <p className="intro--cta" aria-label="userName">Enter your name and click the button below to continue</p>
            <input 
                aria-labelledby="userName" 
                className="intro--name" 
                name="name" 
                value={userName} 
                onChange={updateName}
            />
            <button className="intro--btn intro--link" onClick={proceed}>Submit</button>
        </div>
    )
}

export default Intro