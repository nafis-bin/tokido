import rocketLaunch from '../assets/RocketLaunch.png'
import heroImage from '../assets/hero-image.png'

const Hero = () => {
    return (
        <div className="max-w-[1280px] h-[704px] mx-auto bg-main">
            <div className="bg-main w-full h-full px-[115px] py-[80px]">
                <div className="flex gap-[30px]">
                    <div className="flex flex-col w-[510px] h-[544px] bg-main">
                        <p className="font-work-sans font-semibold leading-[110%] text-[67px] text-white">
                            Discover Digital Art & Collect NFTs
                        </p>
                        <p className="font-work-sans mt-[20px] leading-[160%] text-[22px] text-white">
                            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from
                            more than 20k NFT artists.
                        </p>
                        <button className="flex items-center justify-center hover:cursor-pointer bg-ctoa gap-[12px] mt-[30px] w-[224px] h-[60px] rounded-[20px]">
                            <img 
                                className="size-[20px]"
                                src={rocketLaunch} 
                                alt="rocket launch logo" 
                            />
                            <span className="font-work-sans font-semibold text-[16px] leading-[140%] text-white">
                                Get Started
                            </span>
                        </button>
                        <div className="mt-[30px]">
                            <div className="flex gap-[30px]">
                                <div className="flex flex-col w-[150px] h-[77px] text-white">
                                    <span className="font-space-mono font-bold text-[28px] leading-[140%]">
                                        240k+
                                    </span>
                                    <span className="font-work-sans leading-[160%] text-[24px]">
                                        Total Sale
                                    </span>
                                </div>
                                <div className="flex flex-col w-[150px] h-[77px] text-white">
                                    <span className="font-space-mono font-bold text-[28px] leading-[140%]">
                                        100k+
                                    </span>
                                    <span className="font-work-sans leading-[160%] text-[24px]">
                                        Auctions
                                    </span>
                                </div>
                                <div className="flex flex-col w-[150px] h-[77px] text-white">
                                    <span className="font-space-mono font-bold text-[28px] leading-[140%]">
                                        240k+
                                    </span>
                                    <span className="font-work-sans leading-[160%] text-[24px]">
                                        Artists
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="size-[510px]">
                        <img 
                            className="w-[510px] h-[401px]"
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
                </div>
            </div>
        </div>
    )
}

export default Hero