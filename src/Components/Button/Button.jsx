import React from 'react'
import './Button.css'

const Button = ({ text, onClick, disabled = false }) => {
    return (
        <button
            className="botonPaginas"
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
};


export default Button
