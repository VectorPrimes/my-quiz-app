import {React, useContext} from "react";
import { UserNameContext } from "../Context/Context";
import { ResultContext } from "../Context/ResultContext";
import Confetti from "react-confetti"

function Result(){
    const { userName } = useContext(UserNameContext)
    const { result } = useContext(ResultContext)

    const gradeStyle = {
        color: result.answeredCorrectly >= 15 ? "green" : "red"
    }
       return (
        <div className="result--message">
            <Confetti />
            <h3>Congratulations {userName}! You got {result.answeredCorrectly} out of 30 questions</h3>
            <h3 style={gradeStyle}>{Math.floor((result.answeredCorrectly / 30) * 100)}%</h3>
            <p>You can scroll below to see the made corrections. (No Explanation Given! Just the correct answers).</p>
            <p>Thanks again for helping me test my application.</p>
        </div>
    )
}

export default Result