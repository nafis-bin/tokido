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
            <div className="relative w-full h-[370px]">
                <div className="w-full h-[320px]">
                    <img 
                        className="w-full h-full object-fill"
                        src="/artist-hero-img.png" 
                        alt="artist hero image" 
                    />
                </div>
                <div className="absolute w-[1050px] h-[120px] bottom-0 left-1/2 -translate-x-1/2 rounded-[20px]">
                    <img className="size-[120px] rounded-[20px] border-2 border-[#2b2b2b]" 
                    src="/Avatar Placeholder.png" alt="avatar" />
                </div>
            </div>

            <div className="flex flex-col w-[1050px] h-[377px] mt-[40px] mx-auto
             ">
                <div className="flex items-center justify-between">
                    <h3 className="w-[510px] font-work-sans font-semibold text-[51px] leading-[110%]">
                        AnimaKid
                    </h3>
                    <div className="flex justify-between w-[351px] h-[60px]">
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
                
                <div className="flex gap-[20px] w-[510px] h-[74px] mt-[30px]">
                    <div className="flex flex-col w-[156.67px] h-full">
                        <p className="font-space-mono text-[28px] leading-[140%] font-bold">
                            250k+
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%]">
                            Volume
                        </p>
                    </div>
                    <div className="flex flex-col w-[156.67px] h-full">
                        <p className="font-space-mono text-[28px] leading-[140%] font-bold">
                            50+
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%]">
                            NFTs Sold
                        </p>
                    </div>
                    <div className="flex flex-col w-[156.67px] h-full">
                        <p className="font-space-mono text-[28px] leading-[140%] font-bold">
                            3000+
                        </p>
                        <p className="font-work-sans text-[22px] leading-[160%]">
                            Followers
                        </p>
                    </div>
                </div>
            
                <div className="flex mt-[30px] w-[599px] h-[80px] flex-col gap-[10px]">
                    <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]">
                        Bio
                    </p>
                    <p className="font-work-sans text-[22px] leading-[160%]">
                        The internet's friendliest designer kid.
                    </p>
                </div>

                <div className="flex flex-col mt-[30px] w-[599px] h-[77px] gap-[10px]">
                    <p className="font-space-mono font-bold text-[22px] leading-[160%] text-[#858584]">
                        Links
                    </p>
                    <div className="flex justify-between w-[200px] h-[32px]">
                        <img 
                            className="size-[32px]"
                            src="/globe-logo.png" alt="globe-logo" 
                        />
                        <img 
                            className="size-[32px]"
                            src="/discord-logo.png" alt="discord-logo" 
                        />
                        <img 
                            className="size-[32px]"
                            src="/youtube-logo.png" alt="youtube-logo" 
                        />
                        <img 
                            className="size-[32px]"
                            src="/twitter-logo.png" alt="twitter-logo" 
                        />
                        <img 
                            className="size-[32px]"
                            src="/instagram-logo.png" alt="instagram-logo" 
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-[70px] border-t-1 border-[#3b3b3b] mt-[40px]">
                <div className="flex w-[1050px] h-[60px] mx-auto mt-[10px]">
                    {['created', 'owned', 'collection'].map((tab, i) => (
                        <div key={i} 
                            onClick={() => setActiveTab(tab)}
                            className={clsx(`flex w-[350px] items-center justify-center gap-4 h-full cursor-pointer`, 
                            activeTab === tab && `border-b-2 border-offset-[-2px] border-[#858584]`)}>
                            <p className={clsx(`capitalize font-work-sans font-semibold text-[22px] leading-[140%] text-[#858584]`, 
                                activeTab === tab && `text-white`)}>
                                {tab}
                            </p>
                            <div className={clsx(`rounded-[20px] px-[10px] py-[5px] bg-[#3b3b3b]`, activeTab === tab && `bg-[#858584]`)}>
                                <p className="font-work-sans text-[16px] leading-[140%]">{data?.length}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-[1627px] bg-[#3b3b3b] py-[80px]">
                {/* cards */}
                <div className="grid grid-cols-3 gap-[30px] w-[1050px] h-[1467px] mx-auto">
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
