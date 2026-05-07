// import { useState } from "react"
import { useCountDown } from "../hooks"
import type { Clock } from "../utilities"

const TimerBid = ({ deadline }: { deadline: number }) => {
    const time: Clock = useCountDown(deadline)

    return (
        <div className="w-[295px] h-[237px] bg-secondary rounded-[20px] px-[30px] py-[30px] max-sm:w-[315px]
        max-sm:mt-[20px]">
            <div className="flex flex-col gap-[10px] w-[235px] h-[87px] max-sm:w-[255px]">
                <p className="font-space-mono text-[12px] leading-[110%]">
                    Auction ends in:
                </p>

                <div className="flex gap-[10px]">
                    <div className="flex flex-col gap-[5px] w-[53px] h-[64px] max-sm:w-[59.67px]">
                        <p className="font-space-mono text-[38px] leading-[120%] font-bold">
                            {time.hours}
                        </p>
                        <p className="font-space-mono text-[12px] leading-[110%]">
                            Hours
                        </p>
                    </div>
                    <span className="font-space-mono font-bold text-[28px] leading-[140%]">
                        :
                    </span>
                    <div className="flex flex-col gap-[5px] w-[53px] h-[64px] max-sm:w-[59.67px]">
                        <p className="font-space-mono text-[38px] leading-[120%] font-bold">
                            {time.minutes}
                        </p>
                        <p className="font-space-mono text-[12px] leading-[110%]">
                            Minutes
                        </p>
                    </div>
                    <span className="font-space-mono font-bold text-[28px] leading-[140%] max-sm:w-[18px]">
                        :
                    </span>
                    <div className="flex flex-col gap-[5px] w-[53px] h-[64px] max-sm:w-[59.67px]">
                        <p className="font-space-mono text-[38px] leading-[120%] font-bold">
                            {time.seconds}
                        </p>
                        <p className="font-space-mono text-[12px] leading-[110%]">
                            Seconds
                        </p>
                    </div>
                </div>
            </div>

            <a href="#">
                <button className="w-[235px] h-[60px] text-[16px] leading-[140%] font-work-sans 
                rounded-[20px] cursor-pointer font-semibold mt-[30px] bg-ctoa max-sm:w-[255px]">
                    Place Bid
                </button>
            </a>
        </div>
    )
}

export default TimerBid