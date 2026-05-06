import { useState, useEffect } from "react";
import { parseDeadline, type Clock } from "../utilities/index.tsx";

export function useCountDown(deadline: number) {
    const [time, setTime] = useState<Clock>({
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

    useEffect(() => {
        const updateTimer = () => {
            try {
                const { hours, minutes, seconds } = parseDeadline(deadline)
                setTime({ hours, minutes, seconds })
            } catch (err) {
                console.log(err)
            }
        }
        const timerId = setInterval(updateTimer, 1000)
        return () => clearInterval(timerId)
        
    }, [deadline])

    return time
}