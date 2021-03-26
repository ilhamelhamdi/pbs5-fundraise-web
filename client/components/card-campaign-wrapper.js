import React from 'react'
import Link from 'next/link'
import NumberFormat from 'react-number-format'
import CardInfo from './card-info'
import ProgressBar from './progress-bar'
import Thumbnail from './thumbnail'
import { currencySetting } from '../config/global'

export default function CardCampaignWrapper({
    className,
    data: { thumbnail, id, title, fundraiser, fund_collected, fund_targeted },
    withXScroll = false,
}) {

    return (
        <div className={`card-campaign-wrapper mx-auto px-4 mb-6 ${className}`}>
            <Link href="/">
                <a className={`bg-white block w-full transform transition-all hover:-translate-y-2 shadow-lg text-sm lg:text-base rounded-2xl overflow-hidden`}>
                    <Thumbnail data={thumbnail} />
                    <CardInfo id={id}>
                        <h3
                            className="campaign-title inline-block h-16 md:h-20 w-full font-medium text-gray-800 line-clamp-3">
                            {title}
                        </h3>
                        <p
                            className="fundraiser text-gray-600 overflow-ellipsis overflow-hidden whitespace-nowrap">
                            {fundraiser}
                        </p>
                        <ProgressBar fund_collected={fund_collected} fund_targeted={fund_targeted} />
                        <div className="row flex flex-row justify-between">
                            <div className={`amount-fund_collected ${withXScroll ? 'text-sm' : 'text-xs md:text-sm lg:text-base'}`}>
                                <span>Terkumpul</span>
                                <p><NumberFormat value={fund_collected} {...currencySetting} /></p>
                            </div>
                            <div className={`amount-targeted text-right ${withXScroll ? 'text-sm' : 'text-xs md:text-sm lg:text-base'}`}>
                                <span>Target</span>
                                <p><NumberFormat value={fund_targeted} {...currencySetting} /></p>
                            </div>
                        </div>
                    </CardInfo>
                </a>
            </Link>
        </div>
    )
}