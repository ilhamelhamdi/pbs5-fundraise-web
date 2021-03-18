import React from 'react'

export default function Banner(props) {
    return (
        <div className={`banner w-full flex mb-12 h-${props.height} bg-${props.color} ${props.className}`}>
            {props.children}
        </div>
    )
}