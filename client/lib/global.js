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

export const getTimeDifference = (any, current) => {
    // [1000, 60, 60, 24, 7, 30, 365]
    const time1 = new Date(any)
    const time2 = new Date(current)

    return Math.floor((time1 - time2) / (1000))
}

export const getRelativeTime = (a, b) => {
    const diff_seconds = getTimeDifference(a, b)
    const rtf = new Intl.RelativeTimeFormat('id');
    let diff_minutes, diff_hours, diff_days, diff_weeks, diff_months, diff_years

    try {
        if (diff_seconds < 0) {
            diff_minutes = Math.ceil(diff_seconds / 60)
            diff_hours = Math.ceil(diff_minutes / 60)
            diff_days = Math.ceil(diff_hours / 24)
            diff_weeks = Math.ceil(diff_days / 7)
            diff_months = Math.ceil(diff_days / 30)
            diff_years = Math.ceil(diff_days / 365)
        } else {
            diff_minutes = Math.floor(diff_seconds / 60)
            diff_hours = Math.floor(diff_minutes / 60)
            diff_days = Math.floor(diff_hours / 24)
            diff_weeks = Math.floor(diff_days / 7)
            diff_months = Math.floor(diff_days / 30)
            diff_years = Math.floor(diff_days / 365)
        }

        // return in second
        if (Math.abs(diff_seconds) < 60) {
            return rtf.format(diff_seconds, 'second')
        }
        // return in minute
        else if (Math.abs(diff_minutes) < 60) {
            return rtf.format(diff_minutes, 'minute')
        }
        // return in hour
        else if (Math.abs(diff_hours) < 24) {
            return rtf.format(diff_hours, 'hour')
        }
        // return in day
        else if (Math.abs(diff_days) < 7) {
            return rtf.format(diff_days, 'day')
        }
        // return in week
        else if (Math.abs(diff_weeks) < 5 && Math.abs(diff_months) == 0) {
            return rtf.format(diff_weeks, 'week')
        }
        // return in month
        else if (Math.abs(diff_months) <= 12 && Math.abs(diff_years) == 0) {
            return rtf.format(diff_months, 'month')
        }
        // return in  year
        else if (Math.abs(diff_years) > 0) {
            return rtf.format(diff_years, 'year')
        }

    } catch (err) {
        console.log(err);
    }
}