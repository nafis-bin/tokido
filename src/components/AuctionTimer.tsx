const AuctionTimer = () => {
    return (
        <div className="flex flex-col gap-[10px] w-full h-full bg-timer rounded-[20px] items-center justify-center">
            <p className="font-space-mono text-[12px] self-start pl-[30px] leading-[110%]">
                Auction ends in:
            </p>
            <div className="flex gap-[10px]">
                <div className="flex flex-col gap-[5px] w-[53px]">
                    <p className="font-space-mono text-[38px] leading-[120%] font-bold">59</p>
                    <p className="font-space-mono text-[12px] leading-[110%]">Hours</p>
                </div>
                <div className="font-space-mono text-[28px] leading-[140%] font-bold">:</div>
                <div className="flex flex-col gap-[5px] w-[53px]">
                    <p className="font-space-mono text-[38px] leading-[120%] font-bold">59</p>
                    <p className="font-space-mono text-[12px] leading-[110%]">Minutes</p>
                </div>
                <div className="font-space-mono text-[28px] leading-[140%] font-bold">:</div>
                <div className="flex flex-col gap-[5px] w-[53px]">
                    <p className="font-space-mono text-[38px] leading-[120%] font-bold">59</p>
                    <p className="font-space-mono text-[12px] leading-[110%]">Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default AuctionTimer