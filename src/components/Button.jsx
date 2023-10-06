import React from 'react'

const Button2 = ({ search, title }) => {
  return (
    <div>
        <button type="submit" onClick={search} style={{display: "inline"}}>{title}</button>
    </div>
  )
}

export default Button2