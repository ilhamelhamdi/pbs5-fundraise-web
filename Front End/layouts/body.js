import React from 'react'

export default function Body(props) {
    return (
        <main className="bg-mypurple-transparent flex flex-col justify-center relative">
            {props.children}
        </main>
    )
}