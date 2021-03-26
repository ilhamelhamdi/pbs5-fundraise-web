import Link from 'next/link'
import React, { useState, useEffect } from 'react'


const Button = ({
    color1,
    color2 = 'white',
    width = 'max',
    height = '8',
    withBorder,
    withChange,
    eventType: { on, off },
    link,
    text,
    className,
}) => {

    const element = React.createRef()
    const styleWithBorder = `bg-${color2} text-${color1} border-${color1} border-2`
    const styleNoBorder = `bg-${color1} text-${color2} border-${color1} border-2`
    const styleActive = withBorder ? styleNoBorder : styleWithBorder
    const styleInactive = withBorder ? styleWithBorder : styleNoBorder

    const [isActive, setIsActive] = useState(false)

    const handleOn = () => setIsActive(true)
    const handleOff = () => setIsActive(false)

    useEffect(() => {
        if (!withChange) return
        const target = element.current
        target.addEventListener(on, handleOn)
        target.addEventListener(off, handleOff)
        return () => {
            target.removeEventListener(on, handleOn);
            target.removeEventListener(off, handleOff);
        }
    }, [])

    // useEffect(() => {
    //     if (withChange) return
    //     const currentTarget = element.hasOwnProperty('current') ? element.current : element
    //     if (currentTarget) currentTarget.addEventListener(off, handleChange)
    //     return () => {
    //         if (currentTarget) currentTarget.removeEventListener(off, handleChange);
    //     }
    // }, [style, on, off])


    return (
        <Link href={link}>
            <a className={`rounded-full block px-6 box-border transition-all ${className} ${isActive ? styleActive : styleInactive} w-${width} h-${height}`}
                ref={element}>
                <span className="inline-block align-middle">
                    {text}
                </span>
            </a>
        </Link >
    )

}

export default Button