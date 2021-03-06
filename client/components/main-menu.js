import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default class MainMenu extends React.Component {
    render() {
        const mainMenu = [
            { text: "Donasi Sekarang", link: "/discover/all", iconPath: "donation.svg" },
            { text: "Galang Dana", link: "/campaign-submission", iconPath: "campaign-submission.svg" },
            { text: "Donasi Universal", link: "/universal-donation", iconPath: "universal-donation.svg" },
            { text: "Belanja & Donasi", link: "/shop-and-donate", iconPath: "shop-and-donate.svg" },
            { text: "Edukasi", link: "/education", iconPath: "education.svg" },
        ]
        // const { windowWidth, breakpoint } = GetWidth()
        return (
            <nav className='nav-bar sm:container xl:max-w-screen-lg sm:rounded-full bg-mypurple-darkest mx-auto transform -translate-y-10 flex flex-row justify-around items-center px-2 py-4  md:p-4'>
                {mainMenu.map(e => {
                    const iconStyle = { fill: '#DAABF7', width: 30, height: 30 }
                    return (
                        <Link href={e.link} key={e.text}>
                            <a
                                className="text-white h-full flex md:flex-auto flex-wrap md:flex-nowrap justify-center items-start md:items-center transform transition-all hover:scale-110 hover:underline text-xs sm:text-sm md:text-base mx-1 md:mx-2"
                            >
                                <div className="flex justify-center items-center md:h-full md:w-1/3 mb-2 md:mb-0">
                                    <div className="flex items-center flex-none">
                                        <Image src={`/img/${e.iconPath}`} width={30} height={30} className="flex-none text-white fill-current" />
                                    </div>
                                </div>
                                <div className="w-full text-center md:text-left h-8 flex items-center justify-center">{e.text}</div>
                            </a>
                        </Link>
                    )
                }
                )}
            </nav>
        )
    }
}