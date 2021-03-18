import React from 'react'
import NavWrapper from '../components/footer-nav-wrapper.js'

const fitur = {
    title: "Fitur",
    list: [
        { name: "Galang Dana", link: "/campaign-submission" },
        { name: "Donasi", link: "/campaigns" },
        { name: "Belana & Donasi", link: "/shop" },
        { name: "Edukasi", link: "/education" },
    ],
    hasIcon: false,
}
const lainnya = {
    title: "Lainnya",
    list: [
        { name: "Tentang Kami", link: "/about-us" },
        { name: "FAQ", link: "/faq" },
    ],
    hasIcon: false,
}
const media_sosial = {
    title: "Media Sosial",
    list: [
        { name: "Facebook", link: "https://facebook.com" },
        { name: "Instagram", link: "https://instagram.com" },
        { name: "Twitter", link: "https://twitter.com" },
        { name: "Youtube", link: "https://youtube.com" },
        { name: "Whatsapp", link: "#" },
    ],
    hasIcon: true
}


export default class Footer extends React.Component {
    render() {
        let icon
        return (
            <footer className="bg-white w-full">
                <div className="container-lg flex flex-row w-4/5 mx-auto pb-16">
                    <div className="flex flex-col h-full mx-8 w-2/5">
                        <h3>Logo</h3>
                        <p className="text-gray-500">CEPBS5.org adalah situs web yang dibangun khusus untuk menggalang dana bantuan dan donasi secara online</p>
                    </div>
                    <NavWrapper data={fitur}></NavWrapper>
                    <NavWrapper data={lainnya}></NavWrapper>
                    <NavWrapper data={media_sosial}></NavWrapper >
                </div >
                <div className="w-screen h-14 text-center flex items-center justify-center bg-mypurple-darkest text-white">
                    <p>Copyrights &copy;2021 Kelompok CEPBS-5 SMA Pradita Dirgantara |  All Rights Reserved</p>
                </div>
            </footer >

        )
    }
}