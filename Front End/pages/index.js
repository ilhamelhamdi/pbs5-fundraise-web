import React from 'react'
import MainMenu from '../components/main-menu.js'
import MySlider from '../components/slider.js'
import MainWrapper from '../components/main-wrapper.js'
import Layout from '../layouts/primary-layout.js'
import CardCampaignWrapper from '../components/card-campaign-wrapper.js'


export default class Home extends React.Component {

  render() {
    const campaigns = [
      {
        title: '606 Santri Tinggal di Bilik Kayu 2X2 Meter',
        thumbnail: {
          imgPath: '/img/b3b81025-3da5-4957-94c9-33dba3a04e32.webp',
          width: 400,
          height: 210,
        },
        id: '12345',
        fundraiser: 'Aksi Cepat Tanggap Sumatera Barat',
        fund_collected: 800000,
        fund_targeted: 1000000,
        link: '/',
      },
      {
        title: 'Puluhan Yatim Dhuafa Ingin Meneruskan Pendidikan',
        thumbnail: {
          imgPath: '/img/b3b81025-3da5-4957-94c9-33dba3a04e32.webp',
          width: 400,
          height: 210,
        },
        id: '54321',
        fundraiser: 'Amal Khair Yasmin',
        fund_collected: 2000000,
        fund_targeted: 10000000,
        link: '/',
      },
      {
        title: 'Gerakan Berbagi Kuota dari Kerabat',
        thumbnail: {
          imgPath: '/img/b3b81025-3da5-4957-94c9-33dba3a04e32.webp',
          width: 400,
          height: 210,
        },
        id: '54321',
        fundraiser: 'Ruang Peduli',
        fund_collected: 1511426,
        fund_targeted: 50000000,
        link: '/',
      },
    ]

    return (
      <Layout title="Home">

        <MySlider>
          <h1 className="text-white">HOME</h1>
        </MySlider>
        <MainMenu />
        <MainWrapper id="campaigns">
          <h2>Penggalangan Dana Pilihan</h2>
          <div class="card-wrapper flex flex-wrap justify-between mt-6">
            {campaigns.map(campaign => <CardCampaignWrapper data={campaign} />)}
            {campaigns.map(campaign => <CardCampaignWrapper data={campaign} />)}
          </div>
        </MainWrapper>
      </Layout>
    )
  }
}