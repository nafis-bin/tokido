const TrendingCollection = () => {
    return (
        <div className="max-w-[1280px] h-[836px] mx-auto px-[115px] py-[80px]">
            <div className="flex flex-col gap-[10px] w-[1046px] h-[91px]">
                <p className="font-work-sans text-[38px] font-semibold leading-[120%]">Trending Collection</p>
                <p className="font-work-sans text-[22px] leading-[160%]">Checkout our weekly updated trending collection.</p>
            </div>

            <div className="flex gap-[30px] w-[1050px] h-[525px] mt-[60px]">
                {/* single box for trending collection */}
                <div className="flex flex-col gap-[15px]">
                    <div className="size-[330px] rounded-[20px] bg-amber-700">
                        <img src="/trending-collection/dawg-p.png" alt="dog NTF" />
                    </div>

                    <div className="flex gap-[15px]">
                        <div className="size-[100px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/dawg-s-1.png" alt="" />
                        </div>
                        <div className="size-[100px] rounded-[20px] bg-red-700">
                            <img src="/trending-collection/dawg-s-2.png" alt="" />
                        </div>
                        <div className="grid place-items-center font-space-mono font-bold text-[22px] leading-[160%] size-[100px] rounded-[20px] bg-ctoa">
                            1025+
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                        <p className="font-work-sans text-[22px] font-semibold leading-[140%]">DSGN Animals</p>
                        <div className="flex gap-3 items-center">
                            <img 
                                className="size-[24px] rounded-full" 
                                src="/avatars/redheaded.png" 
                                alt="icon" 
                            />
                            <span className="font-work-sans text-[16px] leading-[140%]">MrFox</span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-[15px]">
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
                                src="/avatars/redheaded.png" 
                                alt="icon" 
                            />
                            <span className="font-work-sans text-[16px] leading-[140%]">Shroomie</span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-[15px]">
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