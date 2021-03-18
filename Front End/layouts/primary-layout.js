import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Body from './Body'

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title + ' | PBS5.org'}</title>
            </Head>
            <Header></Header>
            <Body>
                {props.children}
            </Body>
            <Footer></Footer>
        </>
    )
}