import React from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />  
          <Route path="/login" element={<Login />} />  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
