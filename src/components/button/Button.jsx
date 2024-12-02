import React from 'react'
import classNames from 'classnames'
import './button.css'

const Button = ({onClick, type, children, size = 's', active}) => {
  const btnClass = classNames({
    'btn': true,
    'btn-secondary': type === 'secondary',
    'btn-primary': type === 'primary',
    'btn-smoll': size === 's',
    'btn-medium': size === 'm',
  })
  
  return (
    <button className={btnClass} onClick={onClick} disabled={active===0} >
      {children}
    </button>
  )
}

export default Button
