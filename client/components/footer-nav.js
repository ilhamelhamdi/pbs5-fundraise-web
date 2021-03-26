import React from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GetWidth } from '../lib/responsive'


export default function FooterNav(props) {
    const [windowWidth, breakpoint] = GetWidth()
    const hasIcon = props.hasIcon
    let icon
    let bgcolor = 'mypurple-darkest'
    if (hasIcon) {
        if (props.name === "Facebook") { icon = <FaFacebookF size={25} color="white" ></FaFacebookF>; bgcolor = "blue-800" }
        if (props.name === "Instagram") { icon = <FaInstagram size={25} color="white"></FaInstagram>; bgcolor = "pink-600" }
        if (props.name === "Twitter") { icon = <FaTwitter size={25} color="white"></FaTwitter>; bgcolor = "blue-500" }
        if (props.name === "Youtube") { icon = <FaYoutube size={25} color="white" ></FaYoutube >; bgcolor = "red-600" }
        if (props.name === "Whatsapp") { icon = <FaWhatsapp size={25} color="white" ></FaWhatsapp >; bgcolor = "green-600" }
    }
    return (
        <Link href={props.link}>
            <a className={`inline-block ${hasIcon && (windowWidth < breakpoint) ? 'w-max' : 'w-1/2'} md:w-max mt-2 md:mt-4 text-gray-500 hover:text-${bgcolor} transition-all`}>
                {hasIcon ? (<span className={`inline-block p-2 bg-${bgcolor} rounded-full mr-2 md:mr-4`}>{icon}</span>) : ''}
                {hasIcon && (windowWidth < breakpoint) ? null : props.name}
            </a>
        </Link>

    )
}