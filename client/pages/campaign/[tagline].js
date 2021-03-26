import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NumberFormat from 'react-number-format'
import Layout from '../../layouts/primary-layout'
import Wrapper from '../../components/wrapper'
import ProgressBar from '../../components/progress-bar'
import { currencySetting } from '../../config/global'
import Button from '../../components/button'


const Tagline = (props) => {
    const router = useRouter()
    const { tagline } = router.query
    const layoutConf = { hasBodyTopPad: true, withChangeHeader: false, title: tagline }
    const buttonDonationConf = { color1: 'mypurple-darkest', link: `/campaign/${tagline}/donate`, text: "Donasi Sekarang" }
    const buttonNavConf = { color1: 'white', color2: 'mypurple-dark', withChange: true, eventType: { on: 'onfocus', off: 'onblur' } }
    const navList = [
        { text: 'Cerita', toId: 'story' },
        { text: 'Info Terbaru', toId: 'updates' },
        { text: 'Donatur', toId: 'donors' },
        { text: 'Rincian Dana', toId: 'fund-details' },
    ]
    const [selected, setSelected] = useState('story')

    const handleClick = (toId) => {
        document.getElementById(selected).classList.toggle('hidden')
        setSelected(toId)
    }

    useEffect(() => {
        document.getElementById(selected).classList.toggle('hidden')
    }, [selected])

    return (
        <Layout {...layoutConf}>
            <div className="container xl:max-w-screen-lg">

                {/* <Image src={ } width={ } height={ } /> */}

                <Wrapper className="">
                    <h1>{props.title}</h1>
                    <div className="fundraiser">
                        <Image />
                        <p>{props.fundraiser.name}</p>
                        <p>{props.fundraiser.isVerified ? "Identitas terverifikasi" : "Identitas belum terverifikasi"}</p>
                    </div>
                    <p><NumberFormat value={props.fund_collected} {...currencySetting} /></p>
                    <p>Terkumpul dari target <NumberFormat value={props.fund_targeted} {...currencySetting} /></p>
                    <ProgressBar fund_collected={props.fund_collected} fund_targeted={props.fund_targeted} />
                    <div>
                        <p>Kekurangan</p>
                        <span><NumberFormat value={props.fund_targeted - props.fund_collected} {...currencySetting} /></span>
                    </div>
                    <div>
                        <span>{props.target_date}</span>
                        <p>hari lagi</p>
                    </div>
                    <p><span>{props.total_donor}</span></p>
                    <Button {...buttonDonationConf} />
                </Wrapper>

                <div className="navbar">
                    {navList.map(nav => {
                        return (
                            <Button
                                link={nav.toId}
                                text={nav.text}
                                key={nav.toId}
                                {...buttonNavConf}
                                onClick={() => handleClick(nav.toId)}
                            />
                        )
                    })}
                </div>

                <Wrapper>
                    <div id="story" className={hidden}>
                        <h2>Story</h2>
                    </div>
                    <div id="updates" className={hidden}>
                        <h2>Updates</h2>
                    </div>
                    <div id="donors" className={hidden}>
                        <h2>Donors</h2>
                    </div>
                    <div id="fund-details" className={hidden}>
                        <h2>Fund Details</h2>
                    </div>
                </Wrapper>
            </div>
        </Layout >
    )
}

export default Tagline