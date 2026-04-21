import rocketLaunch from '../assets/RocketLaunch.png'
import heroImage from '../assets/hero-image.png'

const Hero = () => {
    return (
        <div className="max-w-[1280px] h-[704px] mx-auto bg-main max-md:w-full max-md:h-[541px] max-sm:h-[786px]">
            <div className="bg-main w-full max-sm:w-[315px] h-full md:px-[115px] py-[80px] sm:px-[72px] max-sm:mx-auto max-sm:py-[40px]">

                <div className="flex gap-[30px] max-sm:flex-col max-sm:gap-[40px]">
                    <div className="flex flex-col w-[510px] h-[544px] bg-main max-md:w-[calc(100% - 374px)] max-md:h-[381px]
                    max-sm:w-[315px] max-sm:h-[154px]">
                        <p className="font-work-sans font-semibold leading-[110%] text-[67px] max-md:text-[38px] 
                        max-md:leading-[120%] text-white max-sm:text-[28px] max-sm:leading-[140%]">
                            Discover Digital Art & Collect NFTs
                        </p>
                        <p className="font-work-sans mt-[20px] leading-[160%] text-[22px] max-md:text-[16px] max-md:leading-[140%]
                         text-white max-sm:mt-[10px] max-sm:text-[16px] max-sm:leading-[140%]">
                            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from
                            more than 20k NFT artists.
                        </p>
                        <button className="flex items-center justify-center hover:cursor-pointer bg-ctoa gap-[12px] mt-[30px] 
                        max-md:mt-[20px] w-[224px] h-[60px] rounded-[20px] max-sm:hidden">
                            <img 
                                className="size-[20px]"
                                src={rocketLaunch} 
                                alt="rocket launch logo" 
                            />
                            <span className="font-work-sans font-semibold text-[16px] leading-[140%] text-white">
                                Get Started
                            </span>
                        </button>
                        <div className="mt-[30px] max-md:mt-[20px] max-sm:hidden">
                            <div className="flex gap-[30px]">
                                <div className="flex flex-col w-[150px] h-[77px] text-white max-md:w-[90px] max-md:h-[57px]">
                                    <span className="font-space-mono font-bold text-[28px] leading-[140%]
                                    max-md:text-[22px] max-md:leading-[160%]">
                                        240k+
                                    </span>
                                    <span className="font-work-sans leading-[160%] text-[24px]
                                    max-md:text-[16px] max-md:leading-[140%]">
                                        Total Sale
                                    </span>
                                </div>

                                <div className="flex flex-col w-[150px] h-[77px] text-white max-md:w-[90px] max-md:h-[57px]">
                                    <span className="font-space-mono font-bold text-[28px] leading-[140%]
                                    max-md:text-[22px] max-md:leading-[160%]">
                                        100k+
                                    </span>
                                    <span className="font-work-sans leading-[160%] text-[24px]
                                    max-md:text-[16px] max-md:leading-[140%]">
                                        Auctions
                                    </span>
                                </div>

                                <div className="flex flex-col w-[150px] h-[77px] text-white max-md:w-[90px] max-md:h-[57px]">
                                    <span className="font-space-mono font-bold text-[28px] leading-[140%]
                                    max-md:text-[22px] max-md:leading-[160%]">
                                        240k+
                                    </span>
                                    <span className="font-work-sans leading-[160%] text-[24px]
                                    max-md:text-[16px] max-md:leading-[140%]">
                                        Artists
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* hero image  */}
                    <div className="size-[510px] max-md:size-[330px] max-sm:size-[315px]">
                        <img 
                            className="w-[510px] h-[401px] max-md:w-[330px] max-md:h-[221px] max-sm:w-[315px] max-sm:h-[206px]"
                            src={heroImage} 
                            alt="hero image" 
                        />
                        <div className="flex flex-col gap-[10px] text-white bg-secondary w-full h-[109px] rounded-b-[20px] px-[20px] py-[20px]">
                            <p className="font-work-sans text-[22px] font-semibold leading-[140%]">
                                Space Walking
                            </p>
                            <div className="flex gap-[12px]">
                                <img className="size-[24px] rounded-full" src="/avatars/Mr-Fox.png" alt="redheaded avatar" />
                                <span className="font-work-sans text-[16px] leading-[140%]">Animakid</span>
                            </div>
                        </div>
                    </div>

                    <button className="hidden items-center justify-center hover:cursor-pointer bg-ctoa gap-[12px] 
                     w-[224px] h-[60px] rounded-[20px] max-sm:flex max-sm:w-[315px] max-sm:h-[60px]">
                        <img 
                            className="size-[20px]"
                            src={rocketLaunch} 
                            alt="rocket launch logo" 
                        />
                        <span className="font-work-sans font-semibold text-[16px] leading-[140%] text-white">
                            Get Started
                        </span>
                    </button>
                    <div className="hidden gap-[30px] max-sm:flex">
                            <div className="flex flex-col w-[150px] h-[77px] text-white max-md:w-[90px] max-md:h-[57px]
                            max-sm:w-[85px] max-sm:h-[57px]">
                                <span className="font-space-mono font-bold text-[28px] leading-[140%]
                                    max-md:text-[22px] max-md:leading-[160%]">
                                        240k+
                                </span>
                                <span className="font-work-sans leading-[160%] text-[24px]
                                    max-md:text-[16px] max-md:leading-[140%]">
                                        Total Sale
                                </span>
                            </div>

                            <div className="flex flex-col w-[150px] h-[77px] text-white max-md:w-[90px] max-md:h-[57px]
                            max-sm:w-[85px] max-sm:h-[57px]">
                                <span className="font-space-mono font-bold text-[28px] leading-[140%]
                                    max-md:text-[22px] max-md:leading-[160%]">
                                        100k+
                                </span>
                                <span className="font-work-sans leading-[160%] text-[24px]
                                    max-md:text-[16px] max-md:leading-[140%]">
                                        Auctions
                                </span>
                            </div>

                            <div className="flex flex-col w-[150px] h-[77px] text-white max-md:w-[90px] max-md:h-[57px]
                            max-sm:w-[85px] max-sm:h-[57px]">
                                <span className="font-space-mono font-bold text-[28px] leading-[140%]
                                    max-md:text-[22px] max-md:leading-[160%]">
                                        240k+
                                </span>
                                <span className="font-work-sans leading-[160%] text-[24px]
                                    max-md:text-[16px] max-md:leading-[140%]">
                                        Artists
                                </span>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero