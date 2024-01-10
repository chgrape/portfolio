import React from "react"
import "./index.css"
import Home from "./components/Home"


function App() {

  return (
    <div className="flex flex-col h-screen ">
     <Home isReversed={false} />
     <Home isReversed={true} />
    </div>
  )
}

export default App
