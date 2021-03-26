import React from 'react'
import Image from 'next/image'

export default function Thumbnail(props) {
    const { imgPath, width, height } = { ...props.data }
    return (
        <div className={`thumbnail w-full`}>
            <Image src={imgPath} width={width} height={height} layout="responsive" />
        </div>
    )
}