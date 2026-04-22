const TrendingCollection = () => {
    return (
        <div className="max-w-[1280px] h-[836px] mx-auto px-[115px] py-[80px] max-md:py-[40px]
         max-md:max-w-[690px] max-md:h-max max-md:px-0 max-md:py-0 max-sm:max-w-[315px]">
            <div className="flex flex-col gap-[10px] w-[1046px] h-[91px] max-md:w-[690px] max-md:h-[71px] 
            max-sm:max-w-[315px] max-sm:h-[93px]">
                <p className="font-work-sans text-[38px] font-semibold leading-[120%] max-md:leading-[140%]
                max-md:text-[28px]">
                    Trending Collection
                </p>
                <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                    Checkout our weekly updated trending collection.
                </p>
            </div>

            <div className="flex gap-[30px] w-[1050px] h-[525px] mt-[60px] max-md:max-w-[690px] max-sm:max-w-[315px] max-sm:h-[505px]">
                {/* single box for trending collection */}
                <div className="flex flex-col gap-[15px]">
                    <div className="size-[330px] rounded-[20px] bg-amber-700 max-sm:size-[315px]">
                        <img src="/trending-collection/dawg-p.png" alt="dog NTF" />
                    </div>

                    <div className="flex gap-[15px]">
                        <div className="size-[100px] max-sm:size-[95px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/dawg-s-1.png" alt="" />
                        </div>
                        <div className="size-[100px] max-sm:size-[95px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/dawg-s-2.png" alt="" />
                        </div>
                        <div className="grid place-items-center font-space-mono font-bold text-[22px] leading-[160%] 
                        size-[100px] max-sm:size-[95px] max-sm:text-[16px] max-sm:leading-[140%] rounded-[20px] bg-ctoa">
                            1025+
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                        <p className="font-work-sans text-[22px] font-semibold leading-[140%]">DSGN Animals</p>
                        <div className="flex gap-3 items-center">
                            <img 
                                className="size-[24px] rounded-full" 
                                src="/avatars/Mr-Fox.png" 
                                alt="icon" 
                            />
                            <span className="font-work-sans text-[16px] leading-[140%]">MrFox</span>
                        </div>
                    </div>

                </div>

                <div className="hidden flex-col gap-[15px] sm:flex">
                    <div className="size-[330px] rounded-[20px] bg-amber-700">
                        <img src="/trending-collection/shroom-p.png" alt="dog NTF" />
                    </div>

                    <div className="flex gap-[15px]">
                        <div className="size-[100px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/shroom-s-1.png" alt="" />
                        </div>
                        <div className="size-[100px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/shroom-s-2.png" alt="" />
                        </div>
                        <div className="grid place-items-center font-space-mono font-bold text-[22px] leading-[160%] size-[100px] rounded-[20px] bg-ctoa">
                            1025+
                        </div>
                    </div>
                    
                    <div className="w-full flex flex-col gap-[10px]">
                        <p className="font-work-sans text-[22px] font-semibold leading-[140%]">Magic Mashrooms</p>
                        <div className="flex gap-3 items-center">
                            <img 
                                className="size-[24px] rounded-full" 
                                src="/avatars/Mr-Fox.png" 
                                alt="icon" 
                            />
                            <span className="font-work-sans text-[16px] leading-[140%]">Shroomie</span>
                        </div>
                    </div>

                </div>

                <div className="hidden flex-col gap-[15px] md:flex">
                    <div className="size-[330px] rounded-[20px] bg-amber-700">
                        <img src="/trending-collection/robot-p.png" alt="dog NTF" />
                    </div>

                    <div className="flex gap-[15px]">
                        <div className="size-[100px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/robot-s-1.png" alt="" />
                        </div>
                        <div className="size-[100px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/robot-s-2.png" alt="" />
                        </div>
                        <div className="grid place-items-center font-space-mono font-bold text-[22px] leading-[160%] size-[100px] rounded-[20px] bg-ctoa">
                            1025+
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                        <p className="font-work-sans text-[22px] font-semibold leading-[140%]">Disco Machines</p>
                        <div className="flex gap-3 items-center">
                            <img 
                                className="size-[24px] rounded-full" 
                                src="/avatars/redheaded.png" 
                                alt="icon" 
                            />
                            <span className="font-work-sans text-[16px] leading-[140%]">BeKind2Robots</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default TrendingCollection