import React from 'react'

function Input(props) {
    return (
        <input
            type={props.text}
            name={props.name}
            placeholder={props.placeholder}
            className={`form-control ${(props.additionalClass) ? props.additionalClass : ''}`} 
            onKeyUp={props.onKeyUp 
                ? 
                props.onKeyUp : () => {} }
            />
    )
}

export default Input;