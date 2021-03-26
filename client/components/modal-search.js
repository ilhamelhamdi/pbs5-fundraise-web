import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { BiSearch } from 'react-icons/bi'

export default function ModalSearch(props) {
    const styleDisplayed = 'flex flex-wrap items-center h-24 sm:h-1/6 md:h-1/5 w-screen z-50 fixed inset-x-0 top-0 bg-white px-8 text-lg sm:text-xl md:text-2xl'

    const [value, setValue] = useState('')
    // const [isOnSearch, setIsOnSearch] = useState(props.isOnSearch)

    // const handleBlur = () => setIsOnSearch(false)
    const handleChange = (event) => setValue(event.target.value)
    const handleSubmit = (event) => {
        event.preventDefault()
        alert('submitted')
    }

    // useEffect(() => {
    //     const element = document.getElementById('modal-search')
    //     element.addEventListener('blur', handleBlur)
    //     console.log('on blur');
    //     return () => { element.removeEventListener('blur', handleBlur) }
    // })

    return (
        <div
            // className={props.isOnSearch ? styleDisplayed : 'hidden'}
            className={styleDisplayed}
            id="modal-search"
        // ref={props.ref}
        >
            <form onSubmit={handleSubmit} className="container xl:max-w-screen-lg mx-auto">
                <label htmlFor="search-bar" className="block w-full mb-2">
                    <BiSearch />
                    <span className="ml-4">Siapa yang ingin Anda bantu hari ini?</span>
                </label>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    id="search-bar"
                    placeholder='Coba cari tolong menolong'
                    className="w-full block ring-2 ring-gray-200 h-6 sm:h-10 md:h-12 rounded-lg p-4 text-lg"
                />
            </form>

        </div>
    )
}