import React from 'react'
import Image from 'next/image'
import MainMenu from '../components/main-menu.js'
import MySlider from '../components/slider.js'
import MainWrapper from '../components/main-wrapper.js'
import Layout from '../layouts/primary-layout.js'
import CardCampaignWrapper from '../components/card-campaign-wrapper.js'
import Button from '../components/button'
import Banner from '../components/banner.js'
import { campaigns, shops, education_materials } from '../models/index'
import CardEducationWrapper from '../components/card-education-wrapper.js'


export default class Home extends React.Component {

  render() {

    return (
      <Layout title="Home" hasBodyTopPad={false}>

        <MySlider>
          <h1 className="text-white">HOME</h1>
        </MySlider>

        <MainMenu />

        <MainWrapper id="campaigns">
          <h2>Penggalangan Dana Pilihan</h2>
          <div className="card-wrapper pt-6 overflow-x-scroll flex flex-row  max-w-full md:flex-wrap md:justify-between md:overflow-x-hidden">
            {campaigns.map(campaign => <CardCampaignWrapper data={campaign} key={campaign.id} />)}
            {campaigns.map(campaign => <CardCampaignWrapper data={campaign} key={campaign.id} />)}
          </div>
          <Button link={"/campaigns/all"} text={"Lihat lainnya"} withBorder={true} withChange={true} color1={'mypurple-dark'} className="float-right mr-4"></Button>
        </MainWrapper>

        <Banner color="mypurple-dark" className="flex-row justify-around">
          <div id="universal-donation-banner-img" className="w-5/20" >
            <Image src="/img/confused.svg" width={1000} height={1000} />
          </div>
          <div id="universal-donation-banner-info" className="w-7/12 flex flex-row flex-wrap items-center text-white">
            <h2 className="mb-4 w-full text-2xl font-bold">Bingung Memilih Galangan Dana?</h2>
            <p className="mb-4 w-full">Anda dapat memilih #DonasiUniversal agar kami membantu Anda memilihkan dan menyalurkan donasi kepada penerima manfaat yang tepat</p>
            <Button link={"/universal-donation"} text={"#DonasiUniversal"} withBorder={true} withChange={true} color1={'white'} color2={'mypurple-dark'} className=" w-full"></Button>
          </div>
        </Banner>

        <MainWrapper id="shops">
          <h2>Belanja & Donasi</h2>
          <div className="card-wrapper pt-6 overflow-x-scroll flex flex-row  max-w-full md:flex-wrap md:justify-between md:overflow-x-hidden">
            {shops.map(shop => <CardCampaignWrapper data={shop} key={shop.id} />)}
          </div>
          <Button link={"/universal-donation"} text={"Lihat lainnya"} withBorder={true} withChange={true} color1={'mypurple-dark'} className="float-right mr-4"></Button>
        </MainWrapper>


        <MainWrapper id="education">
          <h2>Edukasi</h2>
          <div className="card-wrapper pt-6 overflow-x-scroll flex flex-row  max-w-full md:flex-wrap md:justify-between md:overflow-x-hidden">
            {education_materials.map(material => <CardEducationWrapper data={material} key={material.id} />)}
          </div>
          <Button link={"/education"} text={"Lihat lainnya"} withBorder={true} withChange={true} color1={'mypurple-dark'} className="float-right mr-4"></Button>
        </MainWrapper>

        <Banner color="mypurple-light" className="flex-none flex-wrap justify-between" hasMarginBt={false}>
          <h2 className="w-full text-center text-2xl font-bold text-mypurple-darkest">Mengapa Donasi Melalui PBS5?</h2>
          <p className="w-full text-center my-4">CEPBS5 memudahkan Anda dalam melakukan donasi online dan penggalangan dana untuk orang yang membutuhkan, namun mengapa harus <b>PBS5?</b></p>
          <div className="w-5/20">
            <Image src="/img/security.svg" width={1000} height={1000} />
            <p className="text-center text-lg text-mypurple-darkest font-semibold">Aman & Transparan</p>
          </div>
          <div className="w-5/20">
            <Image src="/img/payment.svg" width={1000} height={1000} />
            <p className="text-center text-lg text-mypurple-darkest font-semibold">Beragam Metode Pembayaran</p>
          </div>
          <div className="w-5/20">
            <Image src="/img/anytime.svg" width={1000} height={1000} />
            <p className="text-center text-lg text-mypurple-darkest font-semibold">Dapat Diakses Kapan Saja</p>
          </div>
        </Banner>
      </Layout>
    )
  }
}