import {React, useState, useEffect, useContext} from "react";
import QuestionTag from "./Question Tag";
import { Outlet, useNavigate } from "react-router-dom";
import questions from "../Question API";
import { InSessionContext } from "../Context/InSessionContext";
import { ResultContext } from "../Context/ResultContext";

function QuizPage(){
    const quizQuestions = (questions[0].government).map((question) => {
        return {...question, userChoice : ""}
    })
    
    const {inSession, setInSession} = useContext(InSessionContext)
    const {setResult} = useContext(ResultContext)

    const [currentQuestionNo, setCurrentQuestion] = useState(1)
    const [examInfo, setExamInfo] = useState(quizQuestions)
    const [attemptedQuestions, setAttemptedQuestions] = useState([])

    const questionNo = []

    for(let i = 0; i < 30; i++){
        questionNo.push(i+1)
    }

    const questionNoElements = questionNo.map((element) => {
        return (
            <QuestionTag
                questionInfo = {examInfo}
                value = {element}
                handleClick={setCurrentQuestion}
            />
        )
    })

    function getResult() {
        let correctAns = 0;
        let wrongAns = 30;

        examInfo.forEach((question) => {
            if (question.userChoice === question.correctAns){
                correctAns++
                wrongAns--
            }
        })

        return(
            {
                answeredCorrectly: correctAns,
                answeredWrongly: wrongAns 
            }
        )
    }

    function handleSubmit() {
        setCurrentQuestion(1)

        setInSession(false)

        let examResults = getResult();
        setResult(examResults)

        navigate("/quiz/result")
    }
    const navigate = useNavigate()
    
    const [timeLeft, setTimeLeft] = useState(1200)
   
    useEffect(() => {
        if (inSession === false) {
            return
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev < 1){
                    handleSubmit()
                    return 0
                } else {
                        return prev - 1
                }
            })
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [inSession, handleSubmit, navigate]) 

    function displayPrevQuestion(){
        currentQuestionNo > 1 ? 
        setCurrentQuestion(currentQuestion => currentQuestion - 1) : 
        setCurrentQuestion(30)
    }

    function displayNextQuestion(){
        currentQuestionNo < 30 ? 
        setCurrentQuestion(currentQuestion => currentQuestion + 1) : 
        setCurrentQuestion(1)
    }

    function updateExamInfo(event){
        const {value} = event.target

        setExamInfo(prevInfo => {
            const newInfo = []

            for (let i = 0; i < prevInfo.length; i++){
                if (prevInfo[currentQuestionNo - 1].id === prevInfo[i].id){
                    const info = {...prevInfo[i], userChoice : value}
                    newInfo.push(info)
                    setAttemptedQuestions(prevAns => {
                        if (!prevAns.includes(prevInfo[i].question) && prevInfo[i].userChoice === ""){
                            return [...prevAns, prevInfo[i].question]
                        } else{
                            return prevAns
                        }
                    })
                } else {
                    newInfo.push(prevInfo[i])
                }
            }

            return newInfo
        })
    }

    function optionState (option) {
        
        if (!inSession && examInfo[currentQuestionNo - 1][`option${option}`] === examInfo[currentQuestionNo - 1].correctAns){
            return <p>✅</p>
        }
        if (!inSession && examInfo[currentQuestionNo - 1].userChoice === examInfo[currentQuestionNo - 1][`option${option}`]){
            if(!inSession && examInfo[currentQuestionNo - 1].userChoice !== examInfo[currentQuestionNo - 1].correctAns){
                return <p className="option-wrong">❌</p>
            }
        }
    }

    const hiddenStyle = {
        display: inSession ? "block" : "none"
    }

    return (
        <div className="quiz-component">
            <div className="current-question">Question {currentQuestionNo} of 30</div>
            <div className="time-remaining">
                {Math.floor(timeLeft/60) >= 10 ? Math.floor(timeLeft/60) : `0${Math.floor(timeLeft/60)}`}:
                {(timeLeft % 60) >= 10 ? timeLeft % 60 : `0${timeLeft % 60}`}
            </div>
            <div className="question-screen">
                
                <Outlet />
                <p className="quiz-question">{examInfo[currentQuestionNo - 1].question}</p>
                <div className="options-container">
                    <p>A</p>
                    <input 
                        id="optionA"
                        type="radio"
                        value={examInfo[currentQuestionNo - 1].optionA}
                        name={examInfo[currentQuestionNo - 1].question}
                        checked = {examInfo[currentQuestionNo - 1].userChoice === examInfo[currentQuestionNo - 1].optionA}
                        onChange={updateExamInfo}
                        disabled = {!inSession}
                    />
                    <label htmlFor="optionA">{examInfo[currentQuestionNo - 1].optionA}</label>
                    {optionState("A")}
                </div>
                <div className="options-container">
                    <p>B</p>
                    <input 
                        id="optionB"
                        type="radio"
                        value={examInfo[currentQuestionNo - 1].optionB}
                        name={examInfo[currentQuestionNo - 1].question}
                        checked = {examInfo[currentQuestionNo - 1].userChoice === examInfo[currentQuestionNo - 1].optionB}
                        onChange={updateExamInfo}
                        disabled = {!inSession}
                    />
                    <label htmlFor="optionB">{examInfo[currentQuestionNo - 1].optionB}</label>
                    {optionState("B")}
                </div>
                <div className="options-container">
                    <p>C</p>
                    <input 
                        id="optionC"
                        type="radio"
                        value={examInfo[currentQuestionNo - 1].optionC}
                        name={examInfo[currentQuestionNo - 1].question}
                        checked = {examInfo[currentQuestionNo - 1].userChoice === examInfo[currentQuestionNo - 1].optionC}
                        onChange={updateExamInfo}
                        disabled = {!inSession}
                    />
                    <label htmlFor="optionC">{examInfo[currentQuestionNo - 1].optionC}</label>
                    {optionState("C")}
                </div>
                <div className="options-container">
                    <p>D</p>
                    <input 
                        id="optionD"
                        type="radio"
                        value={examInfo[currentQuestionNo - 1].optionD}
                        name={examInfo[currentQuestionNo - 1].question}
                        checked = {examInfo[currentQuestionNo - 1].userChoice === examInfo[currentQuestionNo - 1].optionD}
                        onChange={updateExamInfo}
                        disabled = {!inSession}
                    />
                    <label htmlFor="optionD">{examInfo[currentQuestionNo - 1].optionD}</label>
                    {optionState("D")}
                </div>
                <div className="prevOrNext">
                    <button onClick={displayPrevQuestion}>{"<"} Previous</button>
                    <button onClick={displayNextQuestion}>Next {">"}</button>
                </div>
                <button className="quiz-submit link" style={hiddenStyle} onClick={handleSubmit}>Submit</button>
                <div className="question-no-indicators">
                    <p>Attempted {attemptedQuestions.length} of 30 Questions✅❌</p>
                    {questionNoElements}
                </div>
            </div>
        </div>
    )
}

export default QuizPage