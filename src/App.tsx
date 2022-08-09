import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Join } from "./app/pages/Join"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
