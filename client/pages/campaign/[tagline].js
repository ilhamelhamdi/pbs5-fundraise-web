import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import NumberFormat from 'react-number-format'
import Layout from '../../layouts/primary-layout'
import Wrapper from '../../components/wrapper'
import ProgressBar from '../../components/progress-bar'
import { currencySetting } from '../../config/global'
import Button from '../../components/button'


const Tagline = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading</div>
    }

    // Data
    console.log(post.head);
    const title = post.head.title
    const date_target = post.head.date_target
    const fund_collected = post.head.fund_collected
    const fund_targeted = post.head.fund_targeted
    const poster = post.head.poster
    const campaign_id = post.campaign_id
    const story = post.story
    const published_at = post.published_at
    const fund_detail = post.fund_detail
    const fundraiser = post.fundraiser
    const profile_picture = {
        url: post.fundraiser.profile_picture.formats.thumbnail.url,
        width: post.fundraiser.profile_picture.formats.thumbnail.width,
        height: post.fundraiser.profile_picture.formats.thumbnail.height
    }

    // Logic
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


    // Render
    return (
        <Layout {...layoutConf}>
            <div className="container xl:max-w-screen-lg">

                <Image src={`${process.env.API_BASE_URL}${poster.url}`} width={poster.width} height={poster.height} />

                <Wrapper className="">
                    <h1>{title}</h1>
                    <div className="fundraiser">
                        <Image src={`${process.env.API_BASE_URL}${profile_picture.url}`} width={profile_picture.width} height={profile_picture.height} />
                        <p>{fundraiser.fullname}</p>
                        <p>{fundraiser.isVerified ? "Identitas terverifikasi" : "Identitas belum terverifikasi"}</p>
                    </div>
                    <p><NumberFormat value={fund_collected} {...currencySetting} /></p>
                    <p>Terkumpul dari target <NumberFormat value={fund_targeted} {...currencySetting} /></p>
                    <ProgressBar fund_collected={fund_collected} fund_targeted={fund_targeted} />
                    <div>
                        <p>Kekurangan</p>
                        <span><NumberFormat value={fund_targeted - fund_collected} {...currencySetting} /></span>
                    </div>
                    <div>
                        <span>{date_target}</span>
                        <p>hari lagi</p>
                    </div>
                    {/* <p><span>{post.total_donor}</span></p> */}
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
                    <div id="story" className={'hidden'}>
                        <h2>Story</h2>
                    </div>
                    <div id="updates" className={'hidden'}>
                        <h2>Updates</h2>
                    </div>
                    <div id="donors" className={'hidden'}>
                        <h2>Donors</h2>
                    </div>
                    <div id="fund-details" className={'hidden'}>
                        <h2>Fund Details</h2>
                    </div>
                </Wrapper>
            </div>
        </Layout >
    )
}

// const Tagline = ({ post }) => {
//     const router = useRouter()
//     if (router.isFallback) {
//         return <Layout><h1>Loading</h1></Layout>
//     }
//     console.log(post.head);
//     return <Layout></Layout>
// }

export async function getStaticPaths() {
    return {
        //   paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        paths: [],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: true,
    }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`${process.env.API_BASE_URL}/campaign-details/${params.tagline}`)
    const post = await res.json()
    // Pass post data to the page via props
    return {
        props: { post },
        revalidate: 1,
    }
}


export default Tagline