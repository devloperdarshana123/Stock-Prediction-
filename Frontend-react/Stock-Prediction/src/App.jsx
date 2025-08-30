import React from 'react'
import './assets/css/style.css'
import Main from './componenets/Main'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Register from './componenets/Register' // Add this line
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './componenets/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './componenets/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
           <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
           <Route path = '/dashboard' element = {<PrivateRoute><Dashboard/></PrivateRoute>} />
        </Routes>
         <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App