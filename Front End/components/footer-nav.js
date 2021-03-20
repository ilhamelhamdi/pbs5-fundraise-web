import React from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'



export default function FooterNav(props) {
    let icon
    let bgcolor = 'mypurple-darkest'
    if (props.hasIcon) {
        if (props.name === "Facebook") { icon = <FaFacebookF size={25} color="white" ></FaFacebookF>; bgcolor = "blue-800" }
        if (props.name === "Instagram") { icon = <FaInstagram size={25} color="white"></FaInstagram>; bgcolor = "pink-600" }
        if (props.name === "Twitter") { icon = <FaTwitter size={25} color="white"></FaTwitter>; bgcolor = "blue-500" }
        if (props.name === "Youtube") { icon = <FaYoutube size={25} color="white" ></FaYoutube >; bgcolor = "red-600" }
        if (props.name === "Whatsapp") { icon = <FaWhatsapp size={25} color="white" ></FaWhatsapp >; bgcolor = "green-600" }
    }
    return (
        <Link href={props.link}>
            <a className={`inline-block w-max mt-4 text-gray-500 hover:text-${bgcolor} transition-all`}>
                {props.hasIcon ? (<span className={`inline-block p-2 bg-${bgcolor} rounded-full mr-4`}>{icon}</span>) : ''}
                {props.name}
            </a>
        </Link>

    )
}