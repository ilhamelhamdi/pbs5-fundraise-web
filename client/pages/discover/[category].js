import React from 'react'
import Layout from '../../layouts/primary-layout.js'
import MySlider from '../../components/slider.js'
import MainWrapper from '../../components/main-wrapper.js'
import FilterWrapper from '../../components/filter-wrapper.js'
import MobileFilter from '../../components/mobile-filter.js'
import { campaign_category_filter, campaign_sort_filter, campaign_location_filter } from '../../models/campaigns'
import CardCampaignWrapper from '../../components/card-campaign-wrapper.js'
import Button from '../../components/button'
import { GetWidth } from '../../lib/responsive'


export default function Campaign({ campaigns }) {
  const [windowWidth, breakpoint] = GetWidth()
  return (
    <Layout title="Jelajah" hasBodyTopPad={false} withChangeHeader={true} withLogoNoBackBtn={false}>

      <MySlider>
        <h1 className="text-white">Kampanye</h1>
      </MySlider>

      {/* Filter */}
      {windowWidth >= breakpoint ? (
        <div className="filter-wrapper container mx-auto xl:max-w-screen-lg h-auto flex flex-row justify-between mb-8">
          <FilterWrapper data={campaign_category_filter} />
          <FilterWrapper data={campaign_sort_filter} />
          <FilterWrapper data={campaign_location_filter} />
          <hr />
        </div>
      ) : <MobileFilter />}

      <MainWrapper id="campaigns">
        <h2>Kampanye</h2>
        <div className="card-wrapper container mx-auto pt-6 flex flex-row flex-wrap flex-auto justify-between">
          {campaigns.map(campaign => {
            const cardCampaignData = {
              tagline: campaign.tagline,
              title: campaign.title,
              thumbnail: campaign.poster.formats.small,
              fundraiser: campaign.fundraiser.fullname,
              fund_collected: campaign.fund_collected,
              fund_targeted: campaign.fund_collected,
            }
            return <CardCampaignWrapper {...cardCampaignData} key={campaign.id} className="w-full sm:w-1/2 lg:w-1/3" />
          })}
        </div>
        <Button
          link={"/discover/all"}
          text={"Lihat lainnya"}
          withBorder={true}
          withChange={true}
          color1={'mypurple-dark'}
          className="mx-auto"
          eventType={[{ on: 'mouseenter', off: 'mouseleave' }, { on: 'touchstart', off: 'touchend' }]}
        />
      </MainWrapper>

    </Layout >
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_BASE_URL}/categories`)
  const categories = await res.json()
  const paths = categories.map((category) => ({
    params: { category: category.name },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params);
  let res_campaigns
  if (params.category == 'all') {
    res_campaigns = await fetch(`${process.env.API_BASE_URL}/campaigns`)
  } else {
    res_campaigns = await fetch(`${process.env.API_BASE_URL}/campaigns?category.name=${params.category}`)
  }
  const campaigns = await res_campaigns.json()

  return {
    props: { campaigns }
  }
}