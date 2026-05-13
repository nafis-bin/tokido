import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import clsx from 'clsx'
import type { ArtistProfile } from '../../utilities'

export const Route = createFileRoute('/artists/')({
  component: Artists,
})

type ArtistsTabType = 'Today' | 'This Week' | 'This Month' | 'All Time'

function Artists() {
    const [tab, setTab] = useState<ArtistsTabType>('Today')
    const {data, isLoading, isError} = useQuery<ArtistProfile[]>({
        queryKey: ['artists', tab],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3001/artists`)
            if (!res.ok) throw new Error('type shi')
            return res.json()
        }
    })

    return (
        <div className="w-[1050px] h-max mx-auto max-md:w-[690px]">
            {/* title section */}
            <div className="flex flex-col gap-[20px] w-full my-[80px] max-md:my-[40px]">
                <p className="font-work-sans font-semibold text-[51px] leading-[110%]
                max-md:text-[38px] max-md:leading-[120%]">
                    Top Creators
                </p>
                <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px]
                max-md:leadig-[140%]">
                    Check out top ranking NFT artists on the NFT Marketplace.
                </p>
            </div>

            <div className="flex w-full h-[60px] max-md:w-[680px]">
                {['Today', 'This Week', 'This Month', 'All Time'].map((t, i) => (
                    <div 
                    key={i}
                    onClick={() => setTab(t as ArtistsTabType)}
                    className={clsx(`w-1/4 place-content-center text-center font-work-sans font-semibold
                    text-[#858584] text-[22px] leading-[140%] cursor-pointer max-md:text-[16px] max-md:leading-[140%]
                    max-md:font-semibold`, t === tab && `text-white relative`)}>
                        {t}
                        {t === tab && (
                            <div className="absolute w-full h-[2px] left-0 bottom-0 bg-[#858584]" />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center w-full h-[46px] ring-1 ring-secondary mt-[40px] mb-[20px]
            rounded-[20px] px-[20px] justify-between">
                <div className="flex w-[430px] gap-[20px]">
                    <p className="font-space-mono text-[16px] leading-[140%] text-[#858584]">
                        #
                    </p>
                    <p className="font-space-mono text-[16px] leading-[140%] text-[#858584]">
                        Artist
                    </p>
                </div>
                <div className="flex w-[520px] gap-[20px] max-md:w-[220px]">
                    <p className="font-space-mono text-[16px] leading-[140%] text-[#858584] w-[160px] max-md:w-[100px]">
                        Change
                    </p>
                    <p className="hidden font-space-mono text-[16px] leading-[140%] text-[#858584] w-[160px] 
                    max-md:w-[100px] md:block">
                        NFTs Sold
                    </p>
                    <p className="font-space-mono text-[16px] leading-[140%] text-[#858584] w-[160px] max-md:w-[100px]">
                        Volume
                    </p>
                </div>
            </div>
        
            <div className="flex flex-col gap-[20px] w-full h-max mb-[40px]">
                {isError && (
                    <div className="text-[50px] text-red-800 leading-1.4">
                        Type shi
                    </div>
                )}

                {isLoading && (
                    <div className="text-[50px] text-red-800 leading-1.4">
                        Loading...
                    </div>
                )}

                {/* artists single person */}
                {data && data.map((person, i) => (
                    <div 
                    key={i}
                    className="flex w-full gap-[60px] h-[84px] bg-secondary rounded-[20px] px-[20px] items-center
                    max-md:h-[60px]">
                        <div className="flex gap-[20px] w-[430px] h-[60px] items-center max-md:w-[410px]">
                            <p className="bg-[#2b2b2b] rounded-full w-[30px] h-[30px] flex items-center 
                            text-[16px] leading-[140%] justify-center font-space-mono max-md:bg-secondary
                            max-md:w-[24px] max-md:h-[24px]">
                                {i + 1}
                            </p>
                            <img 
                                className="hidden size-[60px] rounded-full max-md:size-[24px] md:block"
                                src="/avatars/BlueWhale.png" 
                                alt="blue whale" 
                            />
                            <p className="hidden font-work-sans font-semibold text-[22px] leading-[140%] md:block">
                                {person.artist}
                            </p>

                            <div className="hidden gap-3 w-[240px] max-md:flex items-center">
                                <img 
                                    className="size-[24px]"
                                    src="/avatars/BlueWhale.png" 
                                    alt="blue whale" 
                                />
                                <p className="font-work-sans font-semibold text-[22px] leading-[140%]">
                                    {person.artist}
                                </p>
                            </div>

                        </div>

                        <div className="flex w-[520px] gap-[20px] max-md:w-[220px]">
                            <p className="w-[160px] font-space-mono text-[16px] leading-[140%] 
                            text-[#00ac4f] max-md:w-[100px]">
                                {person.change}
                            </p>
                            <p className="hidden w-[160px] font-space-mono text-[16px] leading-[140%] 
                            md:block max-md:w-[100px]">
                                {person.sold}
                            </p>
                            <p className="w-[160px] font-space-mono text-[16px] leading-[140%] max-md:w-[100px]">
                                {person.volume} ETH
                            </p>
                        </div>
                    </div>

                ))}

                


            </div>
        </div>
    )
}
