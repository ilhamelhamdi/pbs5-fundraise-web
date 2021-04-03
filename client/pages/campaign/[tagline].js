import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import NumberFormat from 'react-number-format'
import ReactMarkdown from 'react-markdown'
import Layout from '../../layouts/primary-layout'
import Wrapper from '../../components/wrapper'
import ProgressBar from '../../components/progress-bar'
import { currencySetting } from '../../config/global'
import Button from '../../components/button'
import CardUser from '../../components/card-user'
import { getRelativeTime, getTimeDifference } from '../../lib/global'
import { GetWidth } from '../../lib/responsive'
import Link from 'next/link'


const Tagline = (props) => {
    // Must Be Declared and Procceed even it's still loading
    const router = useRouter()
    const [windowWidth, breakpoint] = GetWidth()
    const [selected, setSelected] = useState('story')
    const [prevSelected, setPrevSelected] = useState('story')

    useEffect(() => {
        if (!router.isFallback) {
            document.getElementById(prevSelected).classList.add('hidden')
            document.getElementById(selected).classList.remove('hidden')
            setPrevSelected(selected)
        }
    }, [selected])

    // Fallback / Render new page
    if (router.isFallback) return <div>Loading</div>

    // Function
    const handleClick = (toId) => {
        setSelected(toId)
    }

    // BEGINNING Data
    const title = props.title
    const date_target = props.date_target
    const fund_collected = props.fund_collected
    const fund_targeted = props.fund_targeted
    const poster = props.poster.formats.large || props.poster
    const story = props.story
    // const story = props.story.replace("\n", "\s\s")
    const updates = props.updates
    const fund_detail = props.fund_detail
    const fundraiser = props.fundraiser
    const donorsList = props.donors
    const total_donors = props.total_donors
    const profile_picture = {
        url: props.fundraiser.profile_picture.formats.thumbnail.url,
        width: props.fundraiser.profile_picture.formats.thumbnail.width,
        height: props.fundraiser.profile_picture.formats.thumbnail.height
    }
    let total_fund_detail = 0
    const dayTargetRemaining = Math.ceil(getTimeDifference(date_target, Date.now()) / (60 * 60 * 24))
    // ENDING Data

    // BEGINNING Configuration
    const { tagline } = router.query
    const layoutConf = { hasBodyTopPad: true, title: tagline, withLogoNoBackBtn: false }
    const buttonDonationConf = { color1: 'mypurple-darkest', link: `/campaign/${tagline}/donate`, text: "Donasi Sekarang" }
    const buttonShareConf = { color1: 'mypurple-dark', color2: 'white', link: '/', text: "Bagikan", hasLink: false, withBorder: true }
    const buttonNavConf = { color1: 'mypurple-dark', color2: 'white', withBorder: true, }
    const cardUserFundraiserConf = { profile_picture: profile_picture, fullname: fundraiser.fullname }
    const cardUserNoPictureConf = {
        profile_picture: {
            url: "/uploads/thumbnail_anonymous_2a95ae41cb.jfif",
            width: 156,
            height: 156
        }
    }
    const navList = [
        { text: 'Cerita', toId: 'story' },
        { text: 'Info Terbaru', toId: 'updates' },
        { text: 'Donatur', toId: 'donors' },
        { text: 'Rincian Dana', toId: 'fund-details' },
    ]
    // ENDING Configuration

    // Testing
    // console.log(story);


    // Components
    const CampaignCardInfo = () => (
        <div className="card-info h-full flex flex-col px-4 md:justify-between md:py-6">
            <h1 id="title" className="h-max w-full text-lg md:text-2xl font-bold flex-none mt-2 mb-4 line-clamp-5">{title}</h1>
            <div>
                <p className="text-mypurple-darkest text-lg md:text-xl xl:text-2xl font-bold">
                    <NumberFormat value={fund_collected} {...currencySetting} />
                </p>
                <p className="text-sm lg:text-base">Terkumpul dari target <span className="text-mypurple-darkest font-bold">
                    <NumberFormat value={fund_targeted} {...currencySetting} />
                </span>
                </p>
                <ProgressBar fund_collected={fund_collected} fund_targeted={fund_targeted} />
                <div className="flex flex-row justify-between">
                    <p id="total-donors" className="text-sm lg:text-base text-gray-600" ><b>{total_donors}</b> donasi</p>
                    <p id="time-remaining" className="text-sm lg:text-base text-gray-600 text-right"><b>{dayTargetRemaining}</b> hari lagi</p>
                </div>
            </div>

            {(windowWidth > breakpoint &&
                <>
                    <div className="buttons">
                        <div className="w-full bg-white py-2 text-lg font-bold">
                            <Button {...buttonDonationConf} width="full" height="12" />
                        </div>
                        <div className="w-full bg-white py-2 text-lg font-bold">
                            <Button {...buttonShareConf} width="full" height="12" />
                        </div>
                    </div>
                    <p className="self-center">
                        Penggalangan Dana ini mencurigakan?
                        <Link href={`/report/${tagline}`}>
                            <a className="text-mypurple-darkest cursor-pointer hover:underline"> Laporkan</a>
                        </Link>
                    </p>
                </>
            )}
        </div>
    )

    // Render
    return (
        <Layout {...layoutConf}>
            <div className="container xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">

                {/* Beginning Left Side Desktop  */}
                {(windowWidth > breakpoint) && (
                    <Wrapper className="sticky top-20 float-left w-72 lg:w-80 2xl:w-96 h-screen-4/5 max-h-150 my-auto mt-4">
                        <CampaignCardInfo />
                    </Wrapper>
                )}
                {/* ENDING Left Side Desktop  */}

                {/* BEGINNING Right Side Desktop */}
                <div className="md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl md:float-right">

                    {/* BEGINNING Poster and Card Info Mobile */}
                    <Wrapper className="m-4 pb-4 md:pb-0 overflow-hidden flex flex-col flex-wrap">
                        <div className="flex-none w-full" >
                            <Image src={`${process.env.API_BASE_URL}${poster.url}`} width={poster.width} height={poster.height} fill="responsive" />
                        </div>
                        {(windowWidth <= breakpoint) && <CampaignCardInfo />}
                    </Wrapper>
                    {/* ENDING Poster and Card Info Mobile */}

                    {/* BEGINNING Fundraiser Info */}
                    <Wrapper className="m-4 p-4 md:p-6">
                        <h2 className="flex-none w-full mb-2">Info Penggalang Dana</h2>
                        <CardUser {...cardUserFundraiserConf}>
                            <p className="text-xs text-gray-600">{fundraiser.isVerified ? "Identitas terverifikasi" : "Identitas belum terverifikasi"}</p>
                        </CardUser>
                    </Wrapper>
                    {/* ENDING Fundraiser Info */}

                    {/* BEGINNING Navigation Button for More Detail */}
                    <div className="navbar flex flex-row overflow-x-auto px-4 pb-4 pt-2 mb-2">
                        {navList.map(nav => {
                            return (
                                <div onClick={() => handleClick(nav.toId)} key={nav.toId}>
                                    <Button
                                        hasLink={false}
                                        link={'/'}
                                        text={nav.text}
                                        width="max"
                                        isSelected={nav.toId === selected}
                                        {...buttonNavConf}
                                        className="mr-2 md:mr-6 lg:px-6"
                                    />
                                </div>
                            )
                        })}
                    </div>
                    {/* ENDING Navigation Button for More Detail */}


                    {/* BEGINNING Campaign Detail */}
                    <div className="md:min-h-150"><Wrapper className="p-4 md:mx-4 md:p-6">
                        {/* BEGINNING Story */}
                        <div id="story" className={'markdown'}>
                            <h2 className="mb-2">Cerita</h2>
                            <ReactMarkdown
                                source={story}
                                // allowDangerousHtml
                                transformImageUri={uri => uri.startsWith("http") ? uri : `${process.env.API_BASE_URL}${uri}`}
                            />
                        </div>
                        {/* ENDING Story */}

                        {/* BEGINNING Updates */}
                        <div id="updates" className={'hidden'}>
                            <h2 className="mb-2">Info Terbaru</h2>
                            {updates.map(update => <div
                                className="rounded-2xl border border-mypurple-darkest p-4 mb-4"
                                key={update.id}>
                                <CardUser {...cardUserFundraiserConf}>
                                    <span className="text-sm text-gray-600">
                                        {getRelativeTime(update.created_at, Date.now())}
                                    </span>
                                </CardUser>
                                <ReactMarkdown source={update.description} />
                            </div>
                            )}
                        </div>
                        {/* ENDING Updates */}

                        {/* BEGINNING Donors */}
                        <div id="donors" className={'hidden'}>
                            <h2 className="mb-2">Donatur</h2>
                            {donorsList.map((donor) => {
                                const cardUserChildren = (
                                    <>
                                        <p>Berdonasi sebesar <NumberFormat value={donor.total_amount} {...currencySetting} /></p>
                                        <p className="text-xs w-full text-gray-600">
                                            {getRelativeTime(donor.createdAt, Date.now())}
                                        </p>
                                    </>)
                                if (donor.isAnonymous) {
                                    return <CardUser {...cardUserNoPictureConf} fullname="Anonim" key={donor.id} className="h-20 my-2">{cardUserChildren}</CardUser>
                                }
                                else if (donor.fullname) {
                                    return <CardUser {...cardUserNoPictureConf} fullname={donor.fullname} key={donor.id} className="h-20 my-2">{cardUserChildren}</CardUser>
                                }
                                else if (donor.user.fullname) {
                                    return <CardUser profile_picture={donor.user.profile_picture.formats.thumbnail} fullname={donor.user.fullname} key={donor.id} className="h-20 my-2">{cardUserChildren}</CardUser>
                                }
                            })}
                        </div>
                        {/* ENDING Donors */}

                        {/* BEGINNING Fund Details */}
                        <div id="fund-details" className={'hidden'}>
                            <h2 className="mb-2">Rincian Dana</h2>
                            <table className="w-full">
                                <tbody>
                                    {fund_detail.map((data, index) => {
                                        total_fund_detail += data.amount
                                        return <tr
                                            className="w-full border-b border-gray-400 py-2 flex flex-row justify-between"
                                            key={index}>
                                            <td className="block">{data.purpose}</td>
                                            <td className="block"><NumberFormat value={data.amount} {...currencySetting} /></td>
                                        </tr>
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr className="w-full py-2 flex flex-row justify-between text-lg font-bold text-mypurple-darkest">
                                        <td className="block">Total</td>
                                        <td className="block"><NumberFormat value={total_fund_detail} {...currencySetting} /></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/* ENDING Fund Details */}
                    </Wrapper></div>
                    {/* ENDING Campaign Detail */}

                </div>
                {/* ENDING More Detail About Campaign */}
            </div>
            {/* ENDING Right Side Desktop */}
            {/* BEGINNING Donation Button */}
            {(windowWidth <= breakpoint &&
                <div className="fixed bottom-0 w-screen bg-white px-4 py-2 text-lg font-bold">
                    <Button {...buttonDonationConf} width="full" height="12" />
                </div>
            )}
            {/* ENDING Donation Button */}
        </Layout >
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const res_campaign = await fetch(`${process.env.API_BASE_URL}/campaign-details/${params.tagline}`)
    const res_donors = await fetch(`${process.env.API_BASE_URL}/campaign-details/${params.tagline}/donors?_sort=updatedAt:DESC&_limit=5`)
    const res_total_donors = await fetch(`${process.env.API_BASE_URL}/campaign-details/${params.tagline}/donors/count`)

    const campaign = await res_campaign.json()
    const donors = await res_donors.json()
    const total_donors = await res_total_donors.json()

    return {
        props: { ...campaign, donors, total_donors },
        revalidate: 60,
    }
}


export default Tagline