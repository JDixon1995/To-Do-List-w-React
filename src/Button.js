import React from 'react'

const Button = ( {text, color} ) => {
    return (
        <button className="btn" style={{background:color}} >{text}</button>
    )
}

export default Button
