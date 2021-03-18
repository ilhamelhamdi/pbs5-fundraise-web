import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default class MainMenu extends React.Component {
    render() {
        const mainMenu = [
            { name: "Donasi Sekarang", link: "/campaigns/all", iconPath: "donation.svg" },
            { name: "Galang Dana", link: "/campaign-submission", iconPath: "campaign.svg" },
            { name: "Donasi Universal", link: "/universal-donation", iconPath: "connection.svg" },
            { name: "Belanja & Donasi", link: "/shop-and-donate", iconPath: "bag.svg" },
            { name: "Edukasi", link: "/education", iconPath: "newspaper.svg" },
        ]
        return (
            <nav className="h-20 2xl:w-2xl xl:w-xl lg:w-lg md:w-md sm:w-sm rounded-full bg-mypurple-darkest mx-auto transform -translate-y-10 flex flex-row justify-around items-center">
                {mainMenu.map(e => {
                    return (
                        <Link href={e.link}>
                            <a className="text-white h-full flex items-center transform transition-all hover:scale-110">
                                <Image src={`/img/${e.iconPath}`} width={25} height={25} color="white" />
                                <span className="ml-2">{e.name}</span>
                            </a>
                        </Link>
                    )
                }
                )}
            </nav>
        )
    }
}