import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form className="h-4/6 w-full rounded-full bg-mypurple-dark flex text-sm">
            <input
                id="search-bar"
                value={value}
                onChange={handleChange}
                placeholder="Ingin membantu siapa hari ini?"
                className="bg-transparent w-full focus:outline-none px-4 placeholder-white placeholder-opacity-50 text-xs sm:text-sm md:text-base"
            />
            <label htmlFor="search-bar">
                <IconContext.Provider value={{ color: "white", size: 20 }}>
                    <div className="w-max h-full flex justify-center items-center pr-4">
                        <BiSearch />
                    </div>
                </IconContext.Provider>
            </label>
        </form>
    )
}