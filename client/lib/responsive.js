import React, { useEffect, useState } from 'react'

const GetWidth = (props) => {
    const [windowWidth, setWindowWidth] = useState();
    const breakpoint = 832

    useEffect(() => {
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const updateDimensions = () => {
        const windowWidth = window.innerWidth
        setWindowWidth(windowWidth)
    }
    return [windowWidth, breakpoint]
}

export { GetWidth }