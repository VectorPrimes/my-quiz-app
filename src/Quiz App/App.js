import React from "react"
import "./App.css"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import { MyProvider } from "./Context/Context"
import { InSessionProvider } from "./Context/InSessionContext"
import { ResultContextProvider } from "./Context/ResultContext"

import Intro from "./Pages/Intro"
import Info from "./Pages/Info"
import Quiz from "./Pages/Quiz"
import Result from './Pages/Result';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />
    },
    {
      path: "/info",
      element: <Info />
    },
    {
      path: "/quiz",
      element: <Quiz />,
      children: [
        {
          path: "/quiz/result",
          element: <Result />
        }
      ]
    }
])

function App(){

    return(
      <InSessionProvider>
        <MyProvider>
          <ResultContextProvider>
            <RouterProvider router={router} />
          </ResultContextProvider>
        </MyProvider>
      </InSessionProvider>
    )
}

export default App