import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { scrollFunction, getScrollTop } from '../lib/index'

const navigasi = [
    { name: "Donasi", link: "/campaigns" },
    { name: "Galang Dana", link: "/campaign-submission" },
    { name: "FAQ", link: "/faq" },
    { name: "Tentang Kami", link: "/about-us" },
]
const user = [
    { name: "Daftar", link: "/register" },
    { name: "Masuk", link: "/login" },
]


export default class Header extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const header = document.querySelector("header")
        const isTop = ["bg-gradient-to-b", "from-gray-800"]
        const noTop = "bg-mypurple-darkest"
        if (window.scrollY != 0) {
            if (header.className.search("purple") != -1) { return }
            isTop.forEach(className => header.classList.toggle(className))
            header.classList.toggle(noTop)
        } else {
            // if (header.className.search("purple") == -1) return
            header.classList.toggle(noTop)
            isTop.forEach(className => header.classList.toggle(className))
        }
    };


    render() {
        return (
            <header className="w-screen h-14 z-10 text-white fixed transition duration-300 ease-in-out bg-gradient-to-b from-gray-800 ">
                <div className="container mx-auto w-4/5 h-full flex flex-row justify-between items-center">
                    <Link href="/">
                        <a className="flex w-max items-center">
                            <Image src="/img/logo-pbs5.svg" alt="logo" width="50" height="50" />
                            <font className="inline-block text-white">PBS5</font>
                        </a>
                    </Link>
                    <nav className="flex w-max items-center">
                        {navigasi.map((e, index) => <Link href={e.link} key={index}><a className="nav-header inline-block rounded-lg  mx-2 p-2 text-l bg-opacity-0 bg-black hover:bg-opacity-20 transition-all">{e.name}</a></Link>)}
                    </nav>
                    <div className="flex w-max items-center">
                        {user.map((e, index) => <Link href={e.link} key={index}><a className="nav-header inline-block rounded-lg  mx-2 p-2 text-l bg-opacity-0 bg-black hover:bg-opacity-20 transition-all">{e.name}</a></Link>)}
                    </div>
                </div>
            </header>
        )
    }
}