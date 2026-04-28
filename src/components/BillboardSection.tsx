import AuctionTimer from "./AuctionTimer"

const BillboardSection = () => {
    return (
        <div className="relative w-full h-[640px] max-md:h-[630px] max-sm:h-[590px]
         mt-[80px] max-sm:mt-[60px] overflow-hidden z-20">
            <img 
                className="absolute w-full h-full inset-0 object-cover -z-10"
                src="/info-bg-image-1.png" 
                alt="info background image" 
            />
            <div className="absolute inset-0 gradient-info"></div>

            {/* information area */}
            <div className="absolute flex w-[1050px] h-[220px] left-1/2 -translate-x-1/2 top-[360px] max-sm:top-[120px]
            max-md:w-[670px] max-md:h-[210px] max-sm:w-[315px] max-sm:h-[430px] z-30">
                <div className="flex flex-col gap-[30px] w-[755px] max-md:w-[375px] h-[220px] max-md:h-[210px]
                 max-sm:w-[315px] max-sm:h-[430px]">

                    <div className="flex gap-[12px] items-center justify-center w-[151px] h-[44px] bg-[#3b3b3b] 
                    rounded-[20px]">
                        <img className="size-[24px] rounded-full" src="/avatars/Shroomie.png" alt="avatar" />
                        <p className="font-work-sans text-[16px] leading-[140%]">Shroomie</p>
                    </div>
                    
                    <p className="font-work-sans text-[51px] leading-[110%] max-md:text-[38px] leading-[120%]
                     font-semibold">
                        Magic Mashrooms
                    </p>

                    <div className="hidden w-[315px] h-[144px] max-sm:block">
                        <AuctionTimer />
                    </div>

                    <button className="flex items-center justify-center rounded-[20px] gap-3 bg-white w-[198px] h-[60px] max-sm:w-full">
                        <img className="size-[20px]" src="/icons/Eye.png" alt="eye icon" />
                        <p className="text-[#2b2b2b] font-work-sans font-semibold text-[16px] leading-[140%]">
                            See NFT
                        </p>
                    </button>
                    
                </div>
                <div className="flex flex-1 h-[147px] self-baseline-last max-sm:hidden">
                    <AuctionTimer />
                </div>
            </div>
        </div>
    )
}

export default BillboardSection