import React from 'react'
import Link from 'next/link'
import Thumbnail from './thumbnail'
import CardInfo from './card-info'

export default function CardEducationWrapper(props) {
    return (
        <Link href="/">
            <a className="card-campaign-wrapper w-60 flex-none md:w-9/20 md:flex-auto rounded-2xl bg-white block transform transition-all hover:-translate-y-2 mb-6 mr-4 shadow-lg text-sm lg:text-base">
                <Thumbnail data={props.data.thumbnail} />
                <CardInfo id={props.data.id}>
                    <h3 className="campaign-title inline-block h-12 font-medium text-gray-800">{props.data.title}</h3>
                    <p className="fundraiser text-gray-600">{props.data.source}</p>
                </CardInfo>
            </a>
        </Link>
    )
}