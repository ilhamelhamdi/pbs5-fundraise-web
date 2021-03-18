import React from 'react'

export default function CardInfo(props) {
    return (
        <div id={props.id} className="card-info w-11/12 mx-auto mb-4">
            {props.children}
        </div>
    )
}