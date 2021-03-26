import Link from 'next/link'
import React, { useEffect } from 'react'
import { IconContext } from 'react-icons'
import { BiArrowBack } from 'react-icons/bi'
import SearchBar from '../components/search-bar'

export default function Search(props) {
  useEffect(() => {
    document.getElementById('search-bar').focus()
  }, [])
  return (
    <>
      <header className={`w-screen h-16 z-20 text-white fixed transition duration-300 ease-in-out bg-mypurple-darkest shadow-xl`}>
        <div className="w-full md:container xl:max-w-screen-lg h-full mx-auto flex justify-center items-center">
          <Link href="/">
            <a >
              <IconContext.Provider value={{ color: "white", size: 24 }}>
                <div className="ml-4"><BiArrowBack /></div>
              </IconContext.Provider>
            </a>
          </Link>
          <div className="h-full w-full flex items-center pl-2 pr-4">
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  )
}