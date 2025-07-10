import React from 'react'

function Button({ text, className = '' }) {
  return (
    <>
      <a className={`btn ${className} btn-outline-info`} href="#">{text}</a>
    </>
  )
}

export default Button