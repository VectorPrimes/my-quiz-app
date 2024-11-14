import React, { useContext, useEffect } from "react";
import QuizPage from "../Components/Quiz Page";
import { InSessionContext } from "../Context/InSessionContext";
import { useNavigate } from "react-router-dom";

function Quiz () {
    const navigate = useNavigate()

    const element = document.documentElement

    const {inSession} = useContext(InSessionContext)

    useEffect(() => {
        if (inSession === "false"){
            navigate("/info")
        } else if (inSession === true){
            if (element.mozRequestFullscreen){
                element.mozRequestFullscreen()
            } else if (element.webkitRequestFullscreen){
                element.webkitRequestFullscreen()
            }else if (element.msRequestFullscreen){
                element.msRequestFullscreen()
            }
        } else if (inSession === false){
            if (document.exitFullscreen){
                document.exitFullscreen()
            } else if (document.mozCancelFullscreen){
                document.mozCancelFullscreen()
            } else if (document.webkitExitFullscreen){
                document.webkitExitFullscreen()
            }else if (document.msExitFullscreen){
                document.msExitFullscreen()
            }
        }
    }, [inSession, navigate, element])

    return (
        <div className="quiz">
            <QuizPage />
        </div>
    )
}

export default Quiz