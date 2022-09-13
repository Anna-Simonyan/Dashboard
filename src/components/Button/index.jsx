import React from 'react'

const Button = ({ text, onClick, className, disabled }) => {
  return (
    <div>
        <button className={className} onClick={onClick} disabled={disabled} >
      {text}
    </button>
    </div>
  )
}

export default Button