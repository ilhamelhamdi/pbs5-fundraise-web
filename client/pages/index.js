import React from 'react'
import Image from 'next/image'
import MainMenu from '../components/main-menu.js'
import MySlider from '../components/slider.js'
import MainWrapper from '../components/main-wrapper.js'
import Layout from '../layouts/primary-layout.js'
import CardCampaignWrapper from '../components/card-campaign-wrapper.js'
import Button from '../components/button'
import Banner from '../components/banner.js'
import { shops, education_materials } from '../models/index'
import CardEducationWrapper from '../components/card-education-wrapper.js'

const serviceMenu = [
  { text: 'Aman & Transparan', imgPath: 'security.svg' },
  { text: 'Beragam Metode Pembayaran', imgPath: 'payment.svg' },
  { text: 'Dapat Diakses Kapan Saja', imgPath: 'anytime.svg' }
]

export default function Home({ campaigns }) {

  const layoutConf = { title: "Home", hasBodyTopPad: false, withChangeHeader: true }
  const buttonConf = { withBorder: true, withChange: true, eventType: [{ on: 'mouseenter', off: 'mouseleave' }, { on: 'touchstart', off: 'touchend' }] }

  return (
    <Layout {...layoutConf}>

      <MySlider>
        <h1 className="text-white">HOME</h1>
      </MySlider>

      <MainMenu />

      <MainWrapper id="campaigns">
        <h2>Penggalangan Dana Pilihan</h2>
        <div
          className="card-wrapper pt-6 flex flex-row  max-w-full flex-wrap justify-between md:overflow-x-hidden">
          {campaigns.map(campaign => {
            const cardCampaignData = {
              tagline: campaign.tagline,
              title: campaign.title,
              thumbnail: campaign.poster.formats.small,
              fundraiser: campaign.fundraiser.fullname,
              fund_collected: campaign.fund_collected,
              fund_targeted: campaign.fund_collected,
            }
            return <CardCampaignWrapper {...cardCampaignData} key={campaign.id} className="w-full sm:w-1/2 md:w-1/3 flex-auto" withXScroll={true} isLandscape={true} />
          })}
        </div>
        <Button
          link={"/campaign/all"}
          text={"Lihat lainnya"}
          color1={'mypurple-dark'}
          className="float-right mr-4"
          {...buttonConf}
        />
      </MainWrapper>

      <Banner color="mypurple-dark" className="flex-col items-center sm:flex-row sm:justify-around sm:flex-wrap">
        <div id="universal-donation-banner-img" className=" max-w-xs sm:w-5/20 order-2 sm:order-1 sm:flex-none" >
          <Image src="/img/confused.svg" width={1000} height={1000} fill="responsive" />
        </div>
        <div className="banner-info flex flex-col flex-auto order-1 sm:order-2 w-full sm:w-5/12 pl-8">
          <h2 className="mb-4 w-full text-2xl font-bold text-white ">
            Bingung Memilih Galangan Dana?
            </h2>
          <p className="mb-4 w-full text-white">
            Anda dapat memilih #DonasiUniversal agar kami membantu Anda memilihkan dan menyalurkan donasi kepada penerima manfaat yang tepat
            </p>
        </div>
        <Button
          link={"/universal-donation"}
          text={"#DonasiUniversal"}
          color1={'white'}
          color2={'mypurple-dark'}
          className=" w-full order-3 mt-4 sm:mt-0 mx-80"
          {...buttonConf}
        />
      </Banner>

      <MainWrapper id="shops">
        <h2>Belanja & Donasi</h2>
        <div className="card-wrapper pt-6 overflow-x-scroll flex flex-row  max-w-full md:flex-wrap md:justify-between md:overflow-x-hidden">
          {/* {shops.map(shop => <CardCampaignWrapper data={shop} key={shop.id} className="w-60 flex-none md:w-6/20 md:flex-auto" />)} */}
        </div>
        <Button
          link={"/universal-donation"}
          text={"Lihat lainnya"}
          color1={'mypurple-dark'}
          className="float-right mr-4"
          {...buttonConf}
        />
      </MainWrapper>

      <MainWrapper id="education">
        <h2>Edukasi</h2>
        <div className="card-wrapper pt-6 overflow-x-scroll flex flex-row  max-w-full md:flex-wrap md:justify-between md:overflow-x-hidden">
          {/* {education_materials.map(material => <CardEducationWrapper data={material} key={material.id} />)} */}
        </div>
        <Button
          link={"/education"}
          text={"Lihat lainnya"}
          color1={'mypurple-dark'}
          className="float-right mr-4"
          {...buttonConf}
        />
      </MainWrapper>

      <Banner color="mypurple-light" className="flex-col sm:flex-row flex-wrap justify-between" hasMarginBt={false}>
        <h2 className="w-full text-center text-2xl font-bold text-mypurple-darkest">Mengapa Donasi Melalui PBS5?</h2>
        <p className="w-full text-center my-4">CEPBS5 memudahkan Anda dalam melakukan donasi online dan penggalangan dana untuk orang yang membutuhkan, namun mengapa harus <b>PBS5?</b></p>
        {serviceMenu.map(service => (
          <div className="w-2/3 sm:w-5/20 mx-auto mt-8 sm:mt-0" key={service.text.toLowerCase().replace(/ /g, "-")}>
            <Image src={`/img/${service.imgPath}`} width={1000} height={1000} />
            <p className="text-center text-xl sm:text-lg text-mypurple-darkest font-semibold">{service.text}</p>
          </div>
        ))}

      </Banner>

    </Layout >
  )

}

export async function getStaticProps() {
  const res_campaigns = await fetch(`${process.env.API_BASE_URL}/campaigns?_limit=6`)
  const campaigns = await res_campaigns.json()

  return {
    props: { campaigns },
    revalidate: 60, // In seconds
  }
}
