import React from 'react'
import Layout from '../../layouts/primary-layout.js'
import MySlider from '../../components/slider.js'
import MainWrapper from '../../components/main-wrapper.js'
import FilterWrapper from '../../components/filter-wrapper.js'
import MobileFilter from '../../components/mobile-filter.js'
import { campaign_category_filter, campaign_sort_filter, campaign_location_filter, campaigns } from '../../models/campaigns'
import CardCampaignWrapper from '../../components/card-campaign-wrapper.js'
import Button from '../../components/button'
import { GetWidth } from '../../lib/responsive'


export default function Campaign() {
    const [windowWidth, breakpoint] = GetWidth()
    return (
        <Layout title="Kampanye" hasBodyTopPad={false} withChangeHeader={true}>

            <MySlider>
                <h1 className="text-white">Kampanye</h1>
            </MySlider>

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
                    {campaigns.map(campaign => <CardCampaignWrapper data={campaign} key={campaign.id} className="w-full sm:w-1/2 lg:w-1/3" />)}
                    {campaigns.map(campaign => <CardCampaignWrapper data={campaign} key={campaign.id} className="w-full sm:w-1/2 lg:w-1/3" />)}
                    {campaigns.map(campaign => <CardCampaignWrapper data={campaign} key={campaign.id} className="w-full sm:w-1/2 lg:w-1/3" />)}
                    {campaigns.map(campaign => <CardCampaignWrapper data={campaign} key={campaign.id} className="w-full sm:w-1/2 lg:w-1/3" />)}
                </div>
                <Button
                    link={"/campaign/all"}
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