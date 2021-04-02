import React from 'react'

export default function CardInfo(props) {
    return (
        <div className={`card-info w-full px-4 mx-auto pb-4 pt-2`}>
            {props.children}
        </div>
    )
}