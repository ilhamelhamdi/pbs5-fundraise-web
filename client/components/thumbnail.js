import React from 'react'
import Image from 'next/image'

export default function Thumbnail(props) {
    const { url, width, height } = { ...props.data }
    return (
        <div className={`thumbnail w-full`}>
            <Image src={process.env.API_BASE_URL + url} width={width} height={height} layout="responsive" />
        </div>
    )
}