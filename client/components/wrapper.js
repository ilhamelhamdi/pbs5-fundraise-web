import React from 'react'

export default function Wrapper(props) {
    return (
        <div className={`bg-white rounded-2xl shadow-lg ${(props.className != undefined) ? props.className : ''}`}>
            {props.children}
        </div>
    )
}