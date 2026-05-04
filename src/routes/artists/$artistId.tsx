import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import clsx from 'clsx'
import ArtCard from '../../components/ArtCard'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/artists/$artistId')({
  component: Artist,
})

export type Art = {
    imgSrc: string,
    artist: string,
    artistIcon: string,
    title: string,
    price: number,
    bid: number
}

function Artist() {
    const [activeTab, setActiveTab] = useState('created')
    const { artistId } = Route.useParams()

    const {data, isLoading, isError} = useQuery<Art[]>({
        queryKey: ['user', artistId, activeTab],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3001/${activeTab}`)
            if (!res.ok) throw new Error('Failed to fetch')
            return res.json()
        }
    })

    return (
        <div className="w-full h-max">
            <div className="relative w-full h-[370px] max-md:h-[330px] max-sm:h-[300px]">
                <div className="w-full h-[320px] max-md:h-[280px] max-sm:h-[250px]">
                    <img 
                        className="w-full h-full object-fill"
                        src="/artist-hero-img.png" 
                        alt="artist hero image" 
                    />
                </div>
                <div className="absolute w-[1050px] max-md:w-[690px] h-[120px] bottom-0 left-1/2 -translate-x-1/2 
                rounded-[20px] max-sm:w-[120px]">
                    <img className="size-[120px] rounded-[20px] border-2 border-[#2b2b2b]" 
                    src="/Avatar Placeholder.png" alt="avatar" />
                </div>
            </div>

            <div className="flex flex-col w-[1050px] max-md:w-[690px] h-[377px] mt-[40px] mx-auto
             max-md:h-[393px] max-md:mt-[30px] max-sm:w-[315px] max-sm:h-[466px]">
                <div className="flex items-center justify-between">
                    <h3 className="w-[510px] max-md:w-[690px] font-work-sans font-semibold text-[51px] max-sm:w-[315px]
                    leading-[110%] max-md:text-[38px] max-md:leading-[120%] max-sm:text-[28px] max-sm:leading-[140%]">
                        AnimaKid
                    </h3>
                    {/* only visible to large screens */}
                   <div className="hidden justify-between w-[351px] h-[60px] md:flex">
                        <button className="flex items-center justify-center gap-3 w-[186px] h-full
                         bg-ctoa rounded-[20px]">
                            <img className="size-[20px]" src="/copy.png" alt="copy icon" />
                            <p className="font-work-sans font-semibold text-[16px] leading-[140%]">
                                0xc0E3...B79C
                            </p>
                        </button>
                        <button className="flex gap-3 items-center justify-center w-[145px] h-full
                        outline-2 outline-offset-[-2px] outline-ctoa rounded-[20px]">
                            <img className="size-[20px]" src="/plus.png" alt="plus icon" />
                            <p className="font-work-sans font-semibold text-[16px] leading-[140%]">
                                Follow
                            </p>
                        </button>
                    </div>
                </div>
                
                {/* only visible to medium to small screens */}
                <div className="hidden justify-between w-[351px] h-[60px] mt-[30px] max-md:flex
                max-sm:w-[315px] max-sm:h-[140px] max-sm:flex-col max-sm:gap-[20px]">
                    <button className="flex items-center justify-center gap-3 w-[186px] h-full
                        bg-ctoa rounded-[20px] max-sm:w-[315px] max-sm:h-[60px]">
                        <img className="size-[20px]" src="/copy.png" alt="copy icon" />
                        <p className="font-work-sans font-semibold text-[16px] leading-[140%]">
                            0xc0E3...B79C
                        </p>
                    </button>
                    <button className="flex gap-3 items-center justify-center w-[145px] h-full
                    outline-2 outline-offset-[-2px] outline-ctoa rounded-[20px] max-sm:w-[315px] max-sm:h-[60px]">
                        <img className="size-[20px]" src="/plus.png" alt="plus icon" />
                        <p className="font-work-sans font-semibold text-[16px] leading-[140%]">
                            Follow
                        </p>
                    </button>
                </div>

                
                <div className="flex gap-[20px] w-[510px] h-[74px] max-md:h-[57px] mt-[30px]
                max-sm:w-[315px]">
                    <div className="flex flex-col w-[156.67px] h-full max-sm:w-[91.67px]">
                        <p className="font-space-mono text-[28px] leading-[140%] max-md:text-[22px] max-md:leading-[160%] font-bold">
                            250k+
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                            Volume
                        </p>
                    </div>
                    <div className="flex flex-col w-[156.67px] h-full max-sm:w-[91.67px]">
                        <p className="font-space-mono text-[28px] leading-[140%] max-md:text-[22px] max-md:leading-[160%] font-bold">
                            50+
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                            NFTs Sold
                        </p>
                    </div>
                    <div className="flex flex-col w-[156.67px] h-full max-sm:w-[91.67px]">
                        <p className="font-space-mono text-[28px] leading-[140%] max-md:text-[22px] max-md:leading-[160%] font-bold">
                            3000+
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                            Followers
                        </p>
                    </div>
                </div>
            
                <div className="flex mt-[30px] w-[599px] h-[80px] flex-col gap-[10px] max-md:w-[690px] max-md:h-[54px] max-sm:w-[315px]">
                    <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]
                    max-md:text-[16px] max-md:leading-[140%] max-md:font-normal">
                        Bio
                    </p>
                    <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                        The internet's friendliest designer kid.
                    </p>
                </div>

                <div className="flex flex-col mt-[30px] w-[599px] h-[77px] gap-[10px] max-md:w-[690px] max-md:h-[56px] max-sm:w-[315px]">
                    <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]
                    max-md:text-[16px] max-md:leading-[140%] max-md:font-normal">
                        Links
                    </p>
                    <div className="flex justify-between w-[200px] h-[32px] max-md:w-[160px] max-md:h-[24px]">
                        <img 
                            className="size-[24px]"
                            src="/globe-logo.png" alt="globe-logo" 
                        />
                        <img 
                            className="size-[24px]"
                            src="/discord-logo.png" alt="discord-logo" 
                        />
                        <img 
                            className="size-[24px]"
                            src="/youtube-logo.png" alt="youtube-logo" 
                        />
                        <img 
                            className="size-[24px]"
                            src="/twitter-logo.png" alt="twitter-logo" 
                        />
                        <img 
                            className="size-[24px]"
                            src="/instagram-logo.png" alt="instagram-logo" 
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-[70px] border-t-1 border-[#3b3b3b] mt-[40px] max-md:mt-[30px]">
                <div className="flex w-[1050px] max-md:w-[680px] h-[60px] mx-auto mt-[10px] max-sm:w-[315px]">
                    {['created', 'owned', 'collection'].map((tab, i) => (
                        <div key={i} 
                            onClick={() => setActiveTab(tab)}
                            className={clsx(`flex w-[350px] items-center justify-center gap-4 h-full cursor-pointer
                                max-md:w-[226.67px] max-sm:w-[105px]`, 
                            activeTab === tab && `border-b-2 border-offset-[-2px] border-[#858584]`)}>
                            <p className={clsx(`capitalize font-work-sans font-semibold text-[22px] leading-[140%] text-[#858584]
                            max-md:text-[16px] max-md:font-semibold max-md:leading-[140%]`, 
                                activeTab === tab && `text-white`)}>
                                {tab}
                            </p>
                            <div className={clsx(`hidden rounded-[20px] px-[10px] py-[5px] bg-[#3b3b3b]`, 
                                activeTab === tab && `bg-[#858584] sm:block`)}>
                                <p className="font-work-sans text-[16px] leading-[140%] max-md:text-[12px] max-md:leading-[110%]">
                                    {data?.length}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-[1627px] bg-[#3b3b3b] py-[80px] max-sm:h-[1426px] border-b-2 border-offset-[-2px] border-[#2b2b2b]">
                {/* cards */}
                <div className="grid grid-cols-3 gap-[30px] w-[1050px] h-[1467px] mx-auto overflow-hidden
                max-md:w-[690px] max-md:grid-cols-2 max-sm:h-[1266px] max-sm:grid-cols-1 max-sm:w-[315px]">
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
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
