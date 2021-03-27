import { useState, useRef, useEffect } from "react"

export const useVisible = (initialIsVisible, eventType = ['click']) => {
    const [isVisible, setIsVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (Array.isArray(eventType)) {
            eventType.map(e => document.addEventListener(e, handleClickOutside, true))
        }
        return () => {
            if (Array.isArray(eventType)) {
                eventType.map(e => document.removeEventListener(e, handleClickOutside, true))
            }
        };
    }, []);

    return { ref, isVisible, setIsVisible };
}
