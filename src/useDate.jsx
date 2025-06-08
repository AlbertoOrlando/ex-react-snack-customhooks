import { useEffect, useState } from "react";

export default function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const intervall = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervall)
        }
    }, [])
    return currentDate
}

