import React from "react";

function QuestionTag(props){
    const info = props.questionInfo

    const styles = {
        backgroundColor : info[props.value - 1].userChoice !== ""? "#5AA8D6" : "#FFFFFF"
    }

    return (
        <button style={styles} className="question-tag" onClick={() => props.handleClick(props.value)}>{props.value}</button>
    )
}

export default QuestionTag