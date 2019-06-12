import React from 'react'

function Button(props) {
    return (
        <button
            className={props.className}
            onClick={props.onClick 
                ? 
                props.onClick : e => e.preventDefault()}
        >
            {props.text}
        </button>
    )
}

export default Button