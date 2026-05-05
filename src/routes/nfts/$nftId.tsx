import { createFileRoute } from '@tanstack/react-router'
import TimerBid from '../../components/TimerBid'

export const Route = createFileRoute('/nfts/$nftId')({
  component: NftPage,
})

function NftPage() {
    const { nftId } = Route.useParams()
    let now = new Date().getTime()
    const end = new Date("2026-05-10").getTime()
    let diffMili = end - now

    let timerId = 1;
    timerId = setInterval(() => {
        now = new Date().getTime()
        diffMili = end - now

        const hours = Math.floor(diffMili / (1000 * 60 * 60))
        const minutes = Math.floor((diffMili % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diffMili % (1000 * 60)) / 1000)
        if (diffMili <= 0) {
            clearInterval(timerId)
        }

        console.table({
            hours, minutes, seconds
        })

    }, 1000)

    return (
        <div className="w-full h-max">
            <div className="w-full h-[560px]">
                <img 
                    className="w-full h-full object-cover"
                    src="/nft-hero-image.png" 
                    alt="hero image for nft page" 
                />
            </div>

            <div className="flex w-[1050px] h-max gap-[150px] mx-auto mt-[40px]">
                <div className="w-[605px] h-max">
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-work-sans font-semibold text-[51px] leading-[110%]">
                            The Orbitians
                        </p>

                        <p className="font-work-sans text-[#858584] text-[22px] leading-[160%]">
                            Minted on Sep 30, 2022
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px] mt-[30px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]">
                            Created By
                        </p>
                        <div className="flex gap-3 h-[31px] items-center">
                            <img 
                            className="size-[24px]"
                            src="/avatars/Robotica.png" alt="icon" />
                            <p className="font-work-sans text-[22px] font-semibold leading-[140%]">
                                Orbitian
                            </p>
                        </div>
                    </div>
                    
                    {/* description */}
                    <div className="flex flex-col gap-[10px] w-[605px] h-max mt-[30px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]">
                            Description
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%]">
                            The Orbitians <br />
                            is a collection of 10,000 unique NFTs on the Ethereum blockchain, <br /><br />
                            There are all sorts of beings in the NFT Universe. The most advanced and
                            friendly of the bunch are Orbitians.<br /><br />
                            They live in a metal space machines, high up in the sky and only have one 
                            foot on Earth. <br /><br />
                            These Orbitians are a peaceful race, but they have been at war with a group 
                            of invaders for many generations. The invaders are called Upside-Downs, 
                            because of their inverted bodies that live on the ground, yet do not know 
                            any other way to be. Upside-Downs believe that they will be able to win this
                            war if they could only get an eye into Orbitian territory, so they've taken 
                            to make human beings their target.
                        </p>
                    </div>

                    {/* details */}
                    <div className="flex flex-col gap-[10px] mt-[30px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]">
                            Details
                        </p>
                        <div className="flex gap-[10px] items-center h-[35px]">
                            <img 
                            className="size-[32px]"
                            src="/globe-logo.png" alt="globe logo" />
                            <span className="font-work-sans text-[22px] leading-[160%]">
                                View on Etherscan
                            </span>
                        </div>
                        <div className="flex gap-[10px] items-center h-[35px]">
                            <img 
                            className="size-[32px]"
                            src="/globe-logo.png" alt="globe logo" />
                            <span className="font-work-sans text-[22px] leading-[160%]">
                                View on Original
                            </span>
                        </div>
                   </div>

                   {/* tags section */}
                   <div className="flex flex-col gap-[20px] mt-[30px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]">
                            Tags
                        </p>
                        <div className="flex gap-[20px] w-[605px]">
                            {['Animation', 'Illustration', 'Moon', 'Moon'].map((tag, i) => (
                                <a key={i} href="#">
                                    <div className="px-[30px] py-[12px] text-[16px] leading-[140%] font-semibold
                                    font-work-sans bg-[#3b3b3b] rounded-[20px]">
                                        {tag}
                                    </div>
                                </a>
                            ))}
                        </div>
                   </div>

                </div>
                <TimerBid time={"08:34:53"} />
            </div>

        </div>
    )
}
