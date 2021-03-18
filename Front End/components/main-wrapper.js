import React from 'react'

export default function MainWrapper(props) {
    return (
        <section id={props.id} className="2xl:w-2xl xl:w-xl lg:w-lg md:w-md sm:w-sm mx-auto bg-white p-6 rounded-2xl shadow-xl">
            {props.children}
        </section>
    )
}