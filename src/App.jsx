import React from 'react'
import InstagramLogin from './pages/InstagramLogin'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<InstagramLogin/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
