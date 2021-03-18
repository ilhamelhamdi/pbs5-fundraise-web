import React from 'react'
import CardInfo from './card-info'
import ProgressBar from './progress-bar'
import NumberFormat from 'react-number-format'
import Thumbnail from './thumbnail'
import Link from 'next/link'

export default function CardCampaignWrapper(props) {
    const currencySetting = {
        displayType: 'text',
        thousandSeparator: '.',
        prefix: 'Rp ',
        decimalSeparator: ',',
        suffix: ',-'

    }
    return (
        <Link href="">
            <a className="card-campaign-wrapper w-6/20 rounded-2xl bg-white block transform transition-all hover:-translate-y-2 mb-6 shadow-lg">
                <Thumbnail data={props.data.thumbnail} />
                <CardInfo id={props.data.id}>
                    <h3 className="campaign-title inline-block h-12 font-medium text-gray-800">{props.data.title}</h3>
                    <p className="fundraiser text-gray-600">{props.data.fundraiser}</p>
                    <ProgressBar fund_collected={props.data.fund_collected} fund_targeted={props.data.fund_targeted} />
                    <div className="row flex flex-row justify-between">
                        <div className="amount-fund_collected">
                            <span>Terkumpul</span>
                            <p><NumberFormat value={props.data.fund_collected} {...currencySetting} /></p>
                        </div>
                        <div className="amount-targeted text-right">
                            <span>Target</span>
                            <p><NumberFormat value={props.data.fund_targeted} {...currencySetting} /></p>
                        </div>
                    </div>
                </CardInfo>
            </a>
        </Link>
    )
}