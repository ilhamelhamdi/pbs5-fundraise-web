import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getSupportPassive } from '../lib/optimization'


const Button = ({
    color1,
    color2 = 'white',
    width = 'max',
    height = '8',
    withBorder,
    withChange,
    eventType,
    hasLink = true,
    isSelected = false,
    link,
    text,
    className,
}) => {

    const element = React.createRef()
    const styleWithBorder = `bg-${color2} text-${color1} border-${color1} border-2`
    const styleNoBorder = `bg-${color1} text-${color2} border-${color1} border-2`
    const styleActive = withBorder ? styleNoBorder : styleWithBorder
    const styleInactive = withBorder ? styleWithBorder : styleNoBorder

    const [isActive, setIsActive] = useState(false || isSelected)

    const handleOn = () => setIsActive(true)
    const handleOff = () => setIsActive(false)

    // Without handler
    useEffect(() => {
        if (!withChange) setIsActive(isSelected)
    }, [isSelected])

    // With handler
    useEffect(() => {
        if (!withChange) return
        const target = element.current
        if (Array.isArray(eventType)) {
            eventType.map((e) => {
                target.addEventListener(e.on, handleOn, getSupportPassive(e.on) ? { passive: true } : false)
                target.addEventListener(e.off, handleOff)

            })
        } else {
            target.addEventListener(eventType.on, handleOn, getSupportPassive(eventType.on) ? { passive: true } : false)
            target.addEventListener(eventType.off, handleOff)
        }

        return () => {
            if (Array.isArray(eventType)) {
                eventType.map((e) => {
                    target.removeEventListener(e.on, handleOn)
                    target.removeEventListener(e.off, handleOff)
                })
            } else {
                target.removeEventListener(eventType.on, handleOn)
                target.removeEventListener(eventType.off, handleOff)
            }
        }
    }, [])

    return (
        <Link href={link}>
            <a
                className={`rounded-full px-6 box-border transition-all flex justify-center items-center ${className} ${isActive ? styleActive : styleInactive} w-${width} h-${height}`}
                onClick={(e) => { if (!hasLink) e.preventDefault() }}
                ref={element} >
                <span className="inline-block align-middle whitespace-nowrap">
                    {text}
                </span>
            </a >
        </Link >
    )

}

export default Button