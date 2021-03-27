import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useVisible } from '../lib/global'
import FilterWrapper from '../components/filter-wrapper.js'
import { campaign_category_filter, campaign_sort_filter, campaign_location_filter } from '../models/campaigns'


export default function MobileFilter(props) {
  const { ref, isVisible, setIsVisible } = useVisible(false, ['click', 'touchstart'])
  return (
    <>
      <div className="h-14 w-14 p-4 rounded-full fixed bottom-8 right-8 z-30 bg-mypurple-darkest shadow-xl" onClick={() => setIsVisible(true)}>
        <Image src="/img/filter-button.svg" width={100} height={100} />
      </div>

      <div className={`fixed bg-white w-full h-80 z-40 transform transition-all duration-700 ${isVisible ? 'bottom-0' : '-bottom-full'}`} ref={ref}>
        <div className="w-full bg-mypurple-darkest text-white text-lg py-2 px-6 flex flex-row justify-between">
          Filter
          <button className="focus:outline-none" onClick={() => setIsVisible(false)}>x</button>
        </div>
        <div className="filter-wrapper h-auto flex flex-col px-6 py-4 bg-mypurple-transparent">
          <FilterWrapper data={campaign_category_filter} className="mb-2" />
          <FilterWrapper data={campaign_sort_filter} className="mb-2" />
          <FilterWrapper data={campaign_location_filter} className="mb-2" />
        </div>
      </div>

    </>
  )
}