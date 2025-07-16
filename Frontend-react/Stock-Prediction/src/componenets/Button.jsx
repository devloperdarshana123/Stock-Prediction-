import React from 'react'
import { Link } from 'react-router-dom'

function Button({ url ,  text, className = '' }) {
  return (
    <>
      <Link className={`btn ${className} btn-outline-info`} to = {url} >{text}</Link>
    </>
  )
}

export default Button