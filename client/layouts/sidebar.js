import React, { useEffect } from 'react'
import Image from 'next/image'
import { useVisible } from '../lib/global'
import Link from 'next/link'
import HomeIcon from '../public/img/home.svg'
import DonationIcon from '../public/img/donation.svg'
import CampaignIcon from '../public/img/campaign.svg'
import UniversalDonationIcon from '../public/img/universal-donation.svg'
import ShopAndDonateIcon from '../public/img/shop-and-donate.svg'
import EducationIcon from '../public/img/education.svg'
import FaqIcon from '../public/img/faq.svg'
import AboutUsIcon from '../public/img/about-us.svg'

const sideBarNav = [
  { text: "Beranda", link: "/" },
  { text: "Donasi", link: "/campaigns" },
  { text: "Galang Dana", link: "/campaign-submission" },
  { text: "Donasi Universal", link: "/universal-donation" },
  { text: "Belanja & Donasi", link: "/shop-and-donate" },
  { text: "Edukasi", link: "/education" },
  { text: "FAQ", link: "/faq" },
  { text: "Tentang Kami", link: "/about-us" },
]
const user = {
  name: "Ilham Abdillah",
  email: "ilhamabdillah123@gmail.com",
  avatar: "photo-profile.jpg"
}

export default function Sidebar({ sendSidebarStatus, sidebarStatus }) {
  const { ref, isVisible, setIsVisible } = useVisible()
  const isLoggedIn = true
  const styleNav = (sidebarStatus === 'on') ? 'left-0' : '-left-full'
  const styleBg = (sidebarStatus === 'off') && 'hidden'
  // const coba = <div>Halo halo</div>
  // const handleCloseBtn = () => {
  //   sendSidebarStatus('off')
  // }

  useEffect(() => {
    setIsVisible(sidebarStatus === 'on')
  }, [sidebarStatus])

  useEffect(() => {
    if (!isVisible) sendSidebarStatus('off')
  }, [isVisible])

  return (
    <>
      <div className={`bg-black bg-opacity-40 h-screen w-screen fixed z-40 transform transition-all ease-out duration-500 ${styleBg}`}></div>

      <div className={`sidebar px-8 py-10 h-screen w-10/12 bg-mypurple-darkest fixed z-50 transform transition-all ease-out duration-500 inset-y-0 ${styleNav}`} ref={ref}>

        {/* User Profile Or Guest */}
        {isLoggedIn ? (
          <Link href="/user">
            <a className="account flex flex-row items-center border-mypurple-light h-20">
              <div className="flex-none flex justify-center items-center w-14 h-14 bg-white border-4 border-white rounded-full overflow-hidden">
                <Image src={`/img/${user.avatar}`} alt="avatar" width="100" height="100" />
              </div>
              <div className="ml-4 flex-shrink flex flex-col items-start justify-start overflow-hidden">
                <h2 className="w-full text-white text-xl sm:text-2xl truncate">{user.name}</h2>
                <p className=" w-full text-mypurple-light text-sm sm:text-base truncate">{user.email}</p>
              </div>
            </a>
          </Link>
        ) : null}

        <div className="sidebar-nav pt-4 border-t">
          {sideBarNav.map(nav => {
            const iconStyle = { fill: '#E5BDFF', width: 30, height: 30 }
            return (
              <div className="text-white flex flex-row items-center" key={nav.text}>
                <div className="h-12 mr-4 flex items-center">
                  {(nav.text == sideBarNav[0].text) && <HomeIcon {...iconStyle} />}
                  {(nav.text == sideBarNav[1].text) && <DonationIcon {...iconStyle} />}
                  {(nav.text == sideBarNav[2].text) && <CampaignIcon {...iconStyle} />}
                  {(nav.text == sideBarNav[3].text) && <UniversalDonationIcon {...iconStyle} />}
                  {(nav.text == sideBarNav[4].text) && <ShopAndDonateIcon {...iconStyle} />}
                  {(nav.text == sideBarNav[5].text) && <EducationIcon {...iconStyle} />}
                  {(nav.text == sideBarNav[6].text) && <FaqIcon {...iconStyle} />}
                  {(nav.text == sideBarNav[7].text) && <AboutUsIcon {...iconStyle} />}
                </div>
                { nav.text}
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}