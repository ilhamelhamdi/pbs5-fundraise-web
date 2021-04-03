import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { IconContext } from 'react-icons'
import { BiArrowBack } from 'react-icons/bi'
import SearchBar from '../components/search-bar'

export default function Search(props) {
  const router = useRouter()
  useEffect(() => {
    document.getElementById('search-bar').focus()
  }, [])
  return (
    <>
      <header className={`w-screen h-16 z-20 text-white fixed transition duration-300 ease-in-out bg-mypurple-darkest shadow-xl`}>
        <div className="w-full md:container xl:max-w-screen-lg h-full mx-auto flex justify-center items-center">
          <IconContext.Provider value={{ color: "white", size: 24 }}>
            <div onClick={() => router.back()} className="ml-4 cursor-pointer" ><BiArrowBack /></div>
          </IconContext.Provider>
          <div className="h-full w-full flex items-center pl-2 pr-4">
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  )
}