import React from 'react'

export default function Button({title, className, ...props}) {
    return (
        <div>
            <button className={className} onClick={props.click}>
                {title}
            </button>
        </div>
    )
}
