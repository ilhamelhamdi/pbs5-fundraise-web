import React from 'react'
import FooterNavWrapper from '../components/footer-nav-wrapper.js'

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
                <div className="container xl:max-w-screen-lg mx-auto flex flex-col md:flex-row  py-8">
                    <div className="flex flex-col h-full p-4 lg:p-8 w-full md:w-2/5">
                        <h3>Logo</h3>
                        <p className="text-gray-500">CEPBS5.org adalah situs web yang dibangun khusus untuk menggalang dana bantuan dan donasi secara online</p>
                    </div>
                    <FooterNavWrapper data={fitur}></FooterNavWrapper>
                    <FooterNavWrapper data={lainnya}></FooterNavWrapper>
                    <FooterNavWrapper data={media_sosial}></FooterNavWrapper >
                </div >
                <div className="w-screen h-14 text-xs sm:text-sm md:text-base text-center flex items-center justify-center bg-mypurple-darkest text-white">
                    <p>Copyrights &copy;2021 Kelompok CEPBS-5 SMA Pradita Dirgantara |  All Rights Reserved</p>
                </div>
            </footer >

        )
    }
}