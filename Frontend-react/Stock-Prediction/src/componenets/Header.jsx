import React , {useContext} from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

function Header() {
  const{isLoggedIn , setIsLoggedIn} = useContext(AuthContext)

  const handleLogout = () =>{
    localStorage.removeItem('accesToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    window.location.href = '/login' // Redirect to login page after logout
  }
  return (
   <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light ' to="/" >Stock Prediction Portal</Link>
        <div>
          {isLoggedIn ? (
            <>
            <button className='btn btn-danger' onClick={handleLogout}> Logout</button>
            </>
          ) : (
         <>
         <Button text = 'Login' className='btn-outline-info' url = "/login" />
            &nbsp;
            <Button text = 'Register' className = " btn-info text-dark" url = "/register" />
         </>
          )}
            
        </div>
    </nav>
   </>
  )
}

export default Header