import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
       <Signup></Signup>
      </div>
    </>
  )
}

export default App
