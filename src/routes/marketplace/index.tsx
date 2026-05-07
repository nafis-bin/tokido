import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { MarketPlaceTab, Art } from '../../utilities'
import clsx from 'clsx'
import { useQuery } from '@tanstack/react-query'
import ArtCard from '../../components/ArtCard'

export const Route = createFileRoute('/marketplace/')({
  component: MarketPlace,
})


function MarketPlace() {
    const [tab, setTab] = useState<MarketPlaceTab>('NFTs')
    const { data, isLoading, isError } = useQuery<Art[]>({
        queryKey: ['markeplace', tab],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3001/${tab}`)
            if (!res.ok) throw new Error('something went bazzuka')
            return res.json()
        }
    })

    return (
        <div className="w-full h-max">
            
            {/* search section */}
            <div className="flex flex-col gap-[30px] w-[1050px] h-[191px] mx-auto my-[80px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="font-work-sans font-semibold text-[51px] leading-[110%]">
                        Browse Marketplace
                    </p>
                    <p className="font-work-sans text-[22px] leading-[160%]">
                        Browse through more than 50k NFTs on the NFT Marketplace.
                    </p>
                </div>

                {/* seach bar */}
                <div className="flex gap-[26px] items-center w-[1050px] h-[60px] rounded-[20px] outline-1 outline-[#3b3b3b] px-[20px]">
                    <input 
                        className="w-[960px] h-[22px] outline-none"
                        placeholder="Search your favorite NFTs"
                        type="text" 
                    />
                    <img 
                        className="size-[24px] cursor-pointer"
                        src="/marketplace/search-icon.png" alt="search icon" 
                    />
                </div>
            </div>

            {/* tab section */}
            <div className="w-full h-[70px] border-t border-[#3b3b3b]">
                <div className="flex w-[1050px] h-[60px] mx-auto mt-[10px]">
                    {['NFTs', 'Collections'].map((bar, i) => (
                        <button 
                            key={i}
                            onClick={() => setTab(bar as MarketPlaceTab)}
                            className={clsx(`w-1/2 h-full`, tab === bar 
                                && `shadow-[inset_0_-2px_0_#858584]`)}
                        >
                            <div className="flex items-center justify-center gap-[16px]">
                                <p className={clsx(`text-[22px] leading-[140%] font-semibold font-work-sans
                                     text-[#858584]`, tab === bar && `text-white`)}>
                                    {bar}
                                </p>
                                <p className={clsx(`px-[10px] py-[5px] font-space-mono text-[16px] leading-[140%]
                                     bg-[#3b3b3b] rounded-[20px]`, tab === bar && `bg-[#858584]`)}>
                                    302
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* cards section */}
            <div className="w-full h-max bg-secondary shadow-[inset_0_-2px_0_0_#2b2b2b]">
                {/* cards container */}
                <div className="grid grid-cols-3 gap-[30px] w-[1050px] py-[60px] mx-auto">
                    {isError && (
                        <div className="text-[48px] text-red-700">
                            type shi
                        </div>
                    )}
                    {isLoading && (
                        <div className="text-[48px] text-red-700">
                            Loading...
                        </div>
                    )}
                    {data && data.map((card, i) => (
                        <ArtCard 
                            key={i}
                            imgSrc={card.imgSrc}
                            artist={card.artist}
                            title={card.title}
                            price={card.price}
                            bid={card.bid}
                            artistIcon={card.artistIcon}
                            mode="dark"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
