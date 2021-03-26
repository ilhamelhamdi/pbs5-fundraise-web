import React from 'react'

export default function ProgressBar(props) {
    const width = Math.round(props.fund_collected / props.fund_targeted * 20);

    return (
        <div className="h-3 relative w-full overflow-hidden my-4">
            <div className="w-full h-full bg-gray-200 absolute rounded-full"></div>
            <div className={`progress-bar h-full bg-mypurple-dark absolute rounded-full w-${width}/20`}></div>
        </div >
    )
}