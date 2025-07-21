import React from 'react'
import './assets/css/style.css'
import Main from './componenets/Main'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Register from './componenets/Register' // Add this line
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './componenets/Login'
import AuthProvider from './AuthProvider'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
           <Route path='/login' element={<Login />} />
        </Routes>
         <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App