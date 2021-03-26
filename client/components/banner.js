import React from 'react'

export default function Banner(props) {
    let hasMarginBt = true
    if (!props.hasMarginBt) hasMarginBt = false
    return (
        <div className={`banner w-full ${hasMarginBt ? "mb-12" : ""} bg-${props.color}`}>
            <div className={`container mx-auto px-8  py-12 xl:max-w-screen-lg flex ${props.className}`}>
                {props.children}
            </div>
        </div>
    )
}