import React from 'react'

export default React.memo(props => {
    return (
        <button
           {...props}
        >
            {props.text}
        </button>
    )
})

