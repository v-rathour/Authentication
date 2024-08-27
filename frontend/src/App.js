import React from 'react'
import NavBar from './component/partials/NavBar'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './component/auth/LoginPage'
import SingUpPage from './component/auth/SingUpPage'

const App = () => {

  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='login' element={<LoginPage/>} />
        <Route path='signup' element={<SingUpPage/>} />
      </Routes>
    </>
  )
}

export default App
