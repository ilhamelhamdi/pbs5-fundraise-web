import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { BiSearch, BiListUl, BiArrowBack } from 'react-icons/bi'
import { GetWidth } from '../lib/responsive'
import SearchBar from '../components/search-bar'

const navigasi = [
    { name: "Donasi", link: "/campaign/all" },
    { name: "Galang Dana", link: "/campaign-submission" },
    { name: "FAQ", link: "/faq" },
    { name: "Tentang Kami", link: "/about-us" },
]
const user = [
    { name: "Daftar", link: "/register" },
    { name: "Masuk", link: "/login" },
]


export default function Header({ withChangeHeader = false, withLogoNoBackBtn = true, sendSidebarStatus }) {
    const router = useRouter()
    const noTop = "bg-mypurple-darkest shadow-xl"
    const isTop = "bg-gradient-to-b from-gray-800"
    const [windowWidth, breakpoint] = GetWidth()
    const [style, setStyle] = useState(!withChangeHeader ? noTop : isTop)

    const handleSidebar = () => {
        sendSidebarStatus('on')
    }

    const handleScroll = () => {
        if (window.scrollY != 0) {
            setStyle(noTop)
        } else {
            setStyle(isTop)
        }
        // console.log("scrollY", window.scrollY);

    };

    useEffect(() => {
        if (withChangeHeader && (windowWidth > breakpoint)) window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    useEffect(() => {
        if (windowWidth <= breakpoint) setStyle(noTop)
    }, [windowWidth])

    const Logo = () => {
        return <Link href="/">
            <a className="flex w-max items-center pr-2">
                <div className="flex-none">
                    <Image src="/img/logo-pbs5.svg" alt="logo" width="50" height="50" />
                </div>
                {(windowWidth > breakpoint) && <span className="block flex-none text-white">PBS5</span>}
            </a>
        </Link>
    }

    const NavMobile = () => {
        return (
            <>
                {withLogoNoBackBtn ? <Logo /> : (
                    <IconContext.Provider value={{ color: "white", size: 24 }}>
                        <div onClick={() => router.back()} className="mr-2" ><BiArrowBack /></div>
                    </IconContext.Provider>
                )}
                <Link href="/search">
                    <a className="h-full w-full flex items-center px-2"><SearchBar isReadOnly={true} /></a>
                </Link>
                <IconContext.Provider value={{ color: "white", size: 24 }}>
                    <div className="h-full w-max flex justify-center items-center" onClick={handleSidebar}><BiListUl /></div>
                </IconContext.Provider>
            </>
        )
    }

    const NavDesktop = () => {
        return (
            <>
                <Logo />
                <nav className="features flex w-max items-center">
                    {navigasi.map((e, index) => (
                        <Link href={e.link} key={index}>
                            <a className="nav-header block rounded-lg  mx-2 p-2 text-center bg-opacity-0 bg-black hover:bg-opacity-40 transition-all">
                                {e.name}
                            </a>
                        </Link>
                    ))}
                </nav>
                <div className="flex w-max items-center">
                    <Link href="/search">
                        <a className="border-r">
                            <IconContext.Provider value={{ color: "white", className: "block mr-4", size: 24 }}>
                                <BiSearch />
                            </IconContext.Provider>
                        </a>
                    </Link>

                    {user.map((e, index) =>
                        <Link href={e.link} key={index}>
                            <a className="nav-header block rounded-lg  ml-2 p-2 text-center bg-opacity-0 bg-black hover:bg-opacity-40 transition-all">
                                {e.name}
                            </a>
                        </Link>)}
                </div>
            </>
        )
    }

    return (
        <>
            <header className={`w-screen h-16 z-20 text-white fixed transition duration-300 ease-in-out ${style}`}>
                <div className="w-full md:container md:mx-auto  xl:max-w-screen-lg 2xl:max-w-screen-xl h-full flex flex-row justify-between items-center px-4 md:px-0">

                    {/* Responsive Navbar */}
                    {(windowWidth > breakpoint) ? <NavDesktop /> : <NavMobile />}

                </div>
            </header>
        </>
    )

}

