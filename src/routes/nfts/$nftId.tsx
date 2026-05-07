import { createFileRoute } from '@tanstack/react-router'
import TimerBid from '../../components/TimerBid'
import { useQuery } from '@tanstack/react-query'
import ArtCard from '../../components/ArtCard'
import type { Art } from '../../utilities'

export const Route = createFileRoute('/nfts/$nftId')({
  component: NftPage,
})

function NftPage() {
    const { nftId } = Route.useParams()
    const { data, isLoading, isError} = useQuery<Art[]>({
        queryKey: ['nft', nftId],
        queryFn: async () => {
            const res = await fetch('http://localhost:3001/created')
            if (!res.ok) throw new Error('some shit happened')
            return res.json()
        }
    })
    const end = new Date("2026-05-10").getTime()

    return (
        <div className="w-full h-max bg-[#2b2b2b]">
            <div className="w-full h-[560px] max-md:h-[420px] max-sm:h-[320px]">
                <img 
                    className="w-full h-full object-cover"
                    src="/nft-hero-image.png" 
                    alt="hero image for nft page" 
                />
            </div>

            <div className="flex w-[1050px] h-max gap-[150px] mx-auto my-[40px]
            max-md:w-[690px] max-md:gap-[30px] max-sm:w-[315px]">
                <div className="w-[605px] h-max max-md:w-[365px] max-sm:w-[315px]">
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-work-sans font-semibold text-[51px] leading-[110%]
                        max-md:text-[38px] max-md:leading-[120%] max-sm:text-[28px] max-sm:leading-[140%]">
                            The Orbitians
                        </p>

                        <p className="font-work-sans text-[#858584] text-[22px] leading-[160%]
                        max-md:text-[16px] max-md:leading-[140%]">
                            Minted on Sep 30, 2022
                        </p>
                    </div>
                    <div className="hidden max-sm:block">
                        <TimerBid deadline={end} />
                    </div>

                    <div className="flex flex-col gap-[10px] mt-[30px] max-sm:mt-[20px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]
                        max-md:text-[16px] max-md:leading-[140%] max-md:font-normal">
                            Created By
                        </p>
                        <div className="flex gap-3 h-[31px] max-md:h-[24px] items-center">
                            <img 
                            className="size-[24px]"
                            src="/avatars/Robotica.png" alt="icon" />
                            <p className="font-work-sans text-[22px] font-semibold leading-[140%]
                            max-md:text-[16px] max-md:leading-[140%]">
                                Orbitian
                            </p>
                        </div>
                    </div>
                    
                    {/* description */}
                    <div className="flex flex-col gap-[10px] w-[605px] h-max mt-[30px] max-md:w-[365px] 
                    max-sm:mt-[20px] max-sm:w-[315px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]
                        max-md:text-[16px] max-md:leading-[140%] max-md:font-normal">
                            Description
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%]
                        max-md:text-[16px] max-md:leading-[140%]">
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
                    <div className="flex flex-col gap-[10px] mt-[30px] max-sm:mt-[20px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]
                        max-md:text-[16px] max-md:leading-[140%] max-md:font-normal">
                            Details
                        </p>
                        <div className="flex gap-[10px] items-center h-[35px] max-md:h-[24px]">
                            <img 
                            className="size-[32px] max-md:size-[24px]"
                            src="/globe-logo.png" alt="globe logo" />
                            <span className="font-work-sans text-[22px] leading-[160%]
                            max-md:text-[16px] max-md:leading-[140%]">
                                View on Etherscan
                            </span>
                        </div>
                        <div className="flex gap-[10px] items-center h-[35px] max-md:h-[24px]">
                            <img 
                            className="size-[32px] max-md:size-[24px]"
                            src="/globe-logo.png" alt="globe logo" />
                            <span className="font-work-sans text-[22px] leading-[160%]
                            max-md:text-[16px] max-md:leading-[140%]">
                                View on Original
                            </span>
                        </div>
                   </div>

                   {/* tags section */}
                   <div className="flex flex-col gap-[20px] mt-[30px] max-sm:mt-[20px]">
                        <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]
                        max-md:text-[16px] max-md:leading-[140%] max-md:font-normal">
                            Tags
                        </p>
                        <div className="flex gap-[20px] w-[605px] max-md:flex-col max-md:w-[365px] max-sm:w-[315px]">
                            {['Animation', 'Illustration', 'Moon', 'Moon'].map((tag, i) => (
                                <a key={i} href="#">
                                    <div className="px-[30px] py-[12px] text-[16px] leading-[140%] font-semibold h-[46px]
                                    font-work-sans bg-[#3b3b3b] rounded-[20px] max-md:w-max uppercase">
                                        {tag}
                                    </div>
                                </a>
                            ))}
                        </div>
                   </div>

                </div>
                <div className="hidden sm:block">
                    <TimerBid deadline={end} />
                </div>
            </div>

            <div className="w-[1050px] h-max mx-auto my-[80px] max-md:w-[690px] max-md:my-[40px] max-sm:mt-[80px]
            max-sm:mb-[40px] max-sm:w-[315px]">

                {/* title  */}
                <div className="flex justify-between">
                    <p className="font-work-sans font-semibold text-[38px] leading-[120%]
                    max-md:text-[28px] max-md:leading-[140%]">
                        More from this Artist
                    </p>
                    <button className="hidden w-[267px] h-[60px] gap-3 items-center justify-center rounded-[20px]
                    outline-2 outline-offset-[-2px] outline-ctoa sm:flex">
                        <img src="/arrow-right.png" alt="right arrow" className="size-[20px]" />
                        <span className="font-work-sans font-semibold text-[16px] leading-[140%]">
                            Go to artist page
                        </span>
                    </button>
                </div>

                {/* cards container */}
                <div className="grid grid-cols-3 gap-[30px] w-[1050px] h-[1527px] mx-auto overflow-hidden
                max-md:w-[690px] max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:w-[315px]
               mt-[60px] gap-y-[60px] max-sm:mt-[30px] max-sm:h-[834px] max-sm:gap-y-[30px]">
                    {/* loading state */}
                    {isLoading && (
                        <div className="text-[48px] text-red-800">
                            Loading...
                        </div>
                    )}
                    {isError && (
                        <div className="text-[48px] text-red-800">
                            Type shi
                        </div>
                    )}
                    {/* single card */}
                    {data && data.map((card, i) => (
                        <ArtCard 
                            key={i}
                            artist={card.artist}
                            imgSrc={card.imgSrc} 
                            artistIcon={card.artistIcon}
                            title={card.title}
                            price={card.price}
                            bid={card.bid}
                            mode="light"
                        />
                    ))}
                </div>

                <a 
                    className="hidden max-sm:block"
                    href="#">
                    <button className="mt-[30px] w-[315px] h-[60px] flex gap-3 items-center justify-center
                    rounded-[20px] outline-2 outline-offset-[-2px] outline-ctoa">
                        <img 
                        className="size-[20px]"
                        src="/arrow-right.png" alt="right arrow icon" />
                        <p className="font-work-sans text-[16px] leading-[140%] font-semibold">
                            Go To Artist Page
                        </p>
                    </button>
                </a>
            </div>

        </div>
    )
}
