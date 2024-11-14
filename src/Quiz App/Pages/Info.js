import {React, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserNameContext } from "../Context/Context";
import { InSessionContext } from "../Context/InSessionContext";

function Info(){
    const {userName} = useContext(UserNameContext)
    const navigate = useNavigate()

    const {inSession, setInSession} = useContext(InSessionContext)

    function beginSession(){
        setInSession(true)
    }

    useEffect(() => {
        if (userName === ""){
            navigate("/")
        }

        if (inSession === true){
            navigate("/quiz")
        }
    }, [])

    return (
        <div className="info">
            <p>{userName}, you have twenty (20) minutes to finish this test</p>
            <p>You are to answer 30 multiple choice questions</p>
            <p>For every question you would be given options lettered A, B, C, D</p>
            <p>When you are ready click the start exam button to start</p>
            <h3>Good Luck {userName}!</h3>
            <button className="info--btn"><Link to={"/quiz"} className="info--link" onClick={beginSession}>Start Quiz</Link></button>
        </div>
    )
}

export default Info