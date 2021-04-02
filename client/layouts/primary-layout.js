import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Body from './Body'
import Sidebar from './sidebar'
// import {}

export default function Layout(props) {
    const [sidebarStatus, setSidebarStatus] = useState('off')
    const getSidebarStatus = (value) => {
        setSidebarStatus(value)
    }
    return (
        <>
            <Head>
                <title>{props.title + ' | PBS5.org'}</title>
            </Head>
            <Sidebar
                sendSidebarStatus={getSidebarStatus}
                sidebarStatus={sidebarStatus}
            />
            <Header
                withChangeHeader={props.withChangeHeader}
                sendSidebarStatus={getSidebarStatus}
                withLogoNoBackBtn={props.withLogoNoBackBtn}
            />
            <Body hasBodyTopPad={props.hasBodyTopPad} className="font-sans">
                {props.children}
            </Body>
            {(props.withFooter != false) && <Footer />}
        </>
    )
}