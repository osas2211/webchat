import React, { useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./app/PrivateRoutes"
import { Join } from "./app/pages/Join"
import { ChatRoom } from "./app/pages/chatRoom"

function App() {
  useEffect(() => {
    if (!localStorage.getItem("messages"))
      localStorage.setItem("messages", JSON.stringify([]))
  }, [])
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/chat-room" element={<ChatRoom />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
