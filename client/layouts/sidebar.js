import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useCookies } from "react-cookie"
import { useVisible } from '../lib/global'
import Link from 'next/link'
import Button from '../components/button'
import axios from 'axios'
import { useRouter } from 'next/router'

const sideBarNav = [
  { text: "Beranda", link: "/", imgPath: "home.svg" },
  { text: "Donasi", link: "/discover/all", imgPath: "donation.svg" },
  { text: "Galang Dana", link: "/campaign-submission", imgPath: "campaign-submission.svg" },
  { text: "Donasi Universal", link: "/universal-donation", imgPath: "universal-donation.svg" },
  { text: "Belanja & Donasi", link: "/shop-and-donate", imgPath: "shop-and-donate.svg" },
  { text: "Edukasi", link: "/education", imgPath: "education.svg" },
  { text: "FAQ", link: "/faq", imgPath: "faq.svg" },
  { text: "Tentang Kami", link: "/about-us", imgPath: "about-us.svg" },
]
// const user = {
//   name: "Ilham Abdillah",
//   email: "ilhamabdillah123@gmail.com",
//   avatar: "photo-profile.jpg"
// }

export default function Sidebar({ sendSidebarStatus, sidebarStatus }) {
  const router = useRouter()
  const [ref, isVisible, setIsVisible] = useVisible(false, ['click', 'touchstart'])
  const [cookie, setCookie, removeCookie] = useCookies(["user_token"])
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: "Guest", email: "guest@gmail.com", avatarPath: "/img/photo-profile.jpg" })
  const styleNav = (sidebarStatus === 'on') ? 'right-0' : '-right-full'
  const styleBg = (sidebarStatus === 'off') && 'hidden'
  const loginBtnConf = {
    color1: 'white',
    color2: 'mypurple-darkest',
    withBorder: true,
    withChange: true,
    link: '/login',
    text: 'Masuk',
    eventType: { on: 'touchstart', off: 'touchend' },
    width: 'full'
  }
  const registerBtnConf = {
    color1: 'white',
    color2: 'mypurple-darkest',
    withBorder: true,
    withChange: true,
    link: '/register',
    text: 'Daftar',
    eventType: { on: 'touchstart', off: 'touchend' },
    width: '1/2'
  }

  const handleLoggedUser = () => {
    if (cookie.user_token === undefined) return

    axios.get(
      process.env.API_BASE_URL + '/users/me',
      { headers: { Authorization: `Bearer ${cookie.user_token}` } }
    ).then(({ data }) => {
      const [name, email, avatarPath] = [data.fullname, data.email, process.env.API_BASE_URL + data.profile_picture.formats.thumbnail.url]
      setUser({ name, email, avatarPath })
    })
      .catch(error => {
        console.log('An error occurred:', error.response);
      })
  }

  const handleLogout = () => {
    setIsVisible(sidebarStatus === 'off')
    router.push('/')
    removeCookie("user_token")
    console.log('Logged Out');
  }

  useEffect(() => {
    setIsVisible(sidebarStatus === 'on')
  }, [sidebarStatus])

  useEffect(() => {
    if (!isVisible) sendSidebarStatus('off')
  }, [isVisible])

  useEffect(() => {
    handleLoggedUser()
    setLoggedIn(cookie.user_token !== undefined)
  }, [cookie.user_token])
  // TESTING
  // console.log(cookie.user_token);

  return (
    <>
      {/* Background */}
      <div className={`bg-black bg-opacity-40 h-screen w-screen fixed z-40 transform transition-all ease-out duration-500 ${styleBg}`}></div>

      {/* Sidebar */}
      <div className={`sidebar px-8 py-10 h-screen w-10/12 bg-mypurple-darkest fixed z-50 transform transition-all ease-out duration-500 inset-y-0 ${styleNav}`} ref={ref}>

        {/* User Profile Or Guest */}
        {loggedIn ? (
          <Link href="/user">
            <a className="account flex flex-row items-center border-mypurple-lighter h-20">
              <div className="flex-none flex justify-center items-center w-14 h-14 bg-white border-4 border-white rounded-full overflow-hidden">
                <Image src={user.avatarPath} alt="avatar" width="100" height="100" />
              </div>
              <div className="ml-4 flex-shrink flex flex-col items-start justify-start overflow-hidden">
                <h2 className="w-full text-white text-xl sm:text-2xl truncate">{user.name}</h2>
                <p className=" w-full text-mypurple-light text-sm sm:text-base truncate">{user.email}</p>
              </div>
            </a>
          </Link>
        ) : (
          <div className="flex flex-row flex-wrap justify-evenly text-white">
            <p className="flex-none whitespace-normal w-full mb-2">Anda belum masuk. Silakan <b>masuk</b> atau <b>daftar</b></p>
            <Button {...loginBtnConf} className="flex-auto mb-2" />
            <Button {...registerBtnConf} className="flex-auto mb-6" />
          </div>
        )}

        {/* Navigation menu */}
        <div className="sidebar-nav pt-4 border-t">
          {sideBarNav.map(nav => (
            <Link href={nav.link} key={nav.text.toLowerCase().replace(/ /g, "-")}>
              <a className="text-white flex flex-row items-center hover:underline"  >
                <div className="h-12 mr-4 flex items-center">
                  <Image src={`/img/${nav.imgPath}`} width="30" height="30" />
                </div>
                {nav.text}
              </a>
            </Link>
          ))}
        </div>

        {/* Logout */}
        {loggedIn && (
          <Link href="/">
            <a
              onClick={() => handleLogout()}
              className="logout absolute left-8 bottom-10 text-white  flex flex-row items-center hover:underline">
              <div className="h-12 mr-4 flex items-center">
                <Image src={`/img/logout.svg`} width="30" height="30" />
              </div>
            Keluar
          </a>
          </Link>
        )}

      </div>
    </>
  )
}