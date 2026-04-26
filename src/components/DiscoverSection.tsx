
const DiscoverSection = () => {
    return (
        <div className="max-w-[1050px] h-max mx-auto max-md:w-[690px] max-sm:w-[315px] mt-[80px] max-md:mt-[40px]">
            {/* heading part */}
            <div className="flex justify-between w-full h-[91px] max-md:h-[71px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="font-work-sans text-[38px] font-semibold leading-[120%] max-md:text-[28px]
                    max-md:leading-[140%]">
                        Discover More NFTs
                    </p>
                    <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                        Explore new trending NFTs
                    </p>
                </div>
                <button className="hidden gap-3 items-center justify-center w-[187px] h-[60px] rounded-[20px] outline-2 outline-offset-[-1px] outline-ctoa
                self-baseline-last sm:flex">
                    <img className="size-[20px]" src="/icons/Eye.png" alt="eye icon" />
                    <p className="font-work-sans font-semibold text-[16px] leading-[140%]">See All</p>
                </button>
            </div>

            {/* card game */}
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[20px] max-md:gap-[30px]
             max-sm:gap-[20px] w-full h-max mt-[40px]">
                <div className="w-[330px] h-[469px] max-sm:w-[315px] max-sm:h-[402px]">
                    <img 
                        className="w-full h-[295px] max-sm:h-[238px] rounded-t-[20px]"
                        src="/nft-cards/card-1.png" alt="nft card" 
                    />
                    <div className="w-full h-[173px] max-sm:h-[164px] bg-[#3b3b3b] px-[30px] pt-[20px]
                    pb-[25px] max-sm:px-[20px] max-sm:pt-[20px] max-sm:pb-[25px] rounded-b-[20px]">
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-work-sans text-[22px] leading-[140%] font-semibold">
                                Distant Galaxy
                            </p>
                            <div className="flex gap-3">
                                <img className="size-[24px]" src="/avatars/Juanie.png" alt="avtr" />
                                <p className="font-space-mono text-[16px] leading-[140%]">MoonDancer</p>
                            </div>
                        </div>
                        <div className="flex w-[270px] max-sm:w-[275px] justify-between mt-[25px]">
                            <div className="flex flex-col gap-2">
                                <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">
                                    Price
                                </p>
                                <p className="font-space-mono text-[16px] leading-[140%] max-sm:text-[12px]
                                max-sm:leading-[110%]">
                                    1.63 ETH
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">
                                    Higest Bid
                                </p>
                                <p className="font-space-mono text-[16px] leading-[140%] max-sm:text-[12px]
                                max-sm:leading-[110%]">
                                    0.33 wETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[330px] h-[469px] max-sm:w-[315px] max-sm:h-[402px]">
                    <img 
                        className="w-full h-[295px] max-sm:h-[238px] rounded-t-[20px]"
                        src="/nft-cards/card-2.png" alt="nft card" 
                    />
                    <div className="w-full h-[173px] max-sm:h-[164px] bg-[#3b3b3b] px-[30px] pt-[20px]
                    pb-[25px] max-sm:px-[20px] max-sm:pt-[20px] max-sm:pb-[25px] rounded-b-[20px]">
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-work-sans text-[22px] leading-[140%] font-semibold">
                                Life On Edena
                            </p>
                            <div className="flex gap-3">
                                <img className="size-[24px]" src="/avatars/Keepitreal.png" alt="avtr" />
                                <p className="font-space-mono text-[16px] leading-[140%]">NebulaKid</p>
                            </div>
                        </div>
                        <div className="flex w-[270px] max-sm:w-[275px] justify-between mt-[25px]">
                            <div className="flex flex-col gap-2">
                                <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">
                                    Price
                                </p>
                                <p className="font-space-mono text-[16px] leading-[140%] max-sm:text-[12px]
                                max-sm:leading-[110%]">
                                    1.63 ETH
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">
                                    Higest Bid
                                </p>
                                <p className="font-space-mono text-[16px] leading-[140%] max-sm:text-[12px]
                                max-sm:leading-[110%]">
                                    0.33 wETH
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[330px] h-[469px] max-sm:w-[315px] max-sm:h-[402px] max-md:hidden 
                max-sm:block">
                    <img 
                        className="w-full h-[295px] max-sm:h-[238px] rounded-t-[20px]"
                        src="/nft-cards/card-3.png" alt="nft card" 
                    />
                    <div className="w-full h-[173px] max-sm:h-[164px] bg-[#3b3b3b] px-[30px] pt-[20px]
                    pb-[25px] max-sm:px-[20px] max-sm:pt-[20px] max-sm:pb-[25px] rounded-b-[20px]">
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-work-sans text-[22px] leading-[140%] font-semibold">
                                AstroFiction
                            </p>
                            <div className="flex gap-3">
                                <img className="size-[24px]" src="/avatars/Dotgu.png" alt="avtr" />
                                <p className="font-space-mono text-[16px] leading-[140%]">SpaceOne</p>
                            </div>
                        </div>
                        <div className="flex w-[270px] max-sm:w-[275px] justify-between mt-[25px]">
                            <div className="flex flex-col gap-2">
                                <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">
                                    Price
                                </p>
                                <p className="font-space-mono text-[16px] leading-[140%] max-sm:text-[12px]
                                max-sm:leading-[110%]">
                                    1.63 ETH
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">
                                    Higest Bid
                                </p>
                                <p className="font-space-mono text-[16px] leading-[140%] max-sm:text-[12px]
                                max-sm:leading-[110%]">
                                    0.33 wETH
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <button className="hidden gap-[12px] items-center justify-center w-[315px] h-[60px] mt-[40px] rounded-[20px] 
            max-sm:flex outline-2 outline-offset-[-1px] outline-ctoa">
                <img 
                    className="size-[20px]"
                    src="/icons/Eye.png" 
                    alt="eye icon" 
                />
                <span className="font-work-sans text-[16px] font-semibold leading-[140%]">
                    See All
                </span>
            </button>
        </div>
    )
}

export default DiscoverSection