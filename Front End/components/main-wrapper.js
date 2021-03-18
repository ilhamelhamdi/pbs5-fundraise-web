import React from 'react'

export default function MainWrapper(props) {
    return (
        <section id={props.id} className="2xl:w-2xl xl:w-xl lg:w-lg  sm:w-9/10 max-w-screen-sm sm:max-w-full mx-auto bg-white p-6 pl-8 rounded-2xl shadow-lg mb-12">
            {props.children}
        </section>
    )
}