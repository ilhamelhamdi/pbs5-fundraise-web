import React from 'react'

export default function Body(props) {
    let hasBodyTopPad = true
    if (props.hasBodyTopPad == false) hasBodyTopPad = false

    return (
        <main className={`bg-mypurple-transparent flex flex-col justify-center relative ${hasBodyTopPad ? "pt-16" : ""}`}>
            {props.children}
        </main>
    )
}