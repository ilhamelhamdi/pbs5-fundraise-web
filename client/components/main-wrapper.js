import React from 'react'

export default function MainWrapper(props) {
    return (
        <section id={props.id} className=" w-screen sm:container xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto bg-white p-6 pl-8 rounded-2xl shadow-lg mb-12 overflow-hidden">
            {props.children}
        </section>
    )
}