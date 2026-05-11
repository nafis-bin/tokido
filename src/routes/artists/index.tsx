import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import clsx from 'clsx'

export const Route = createFileRoute('/artists/')({
  component: Artists,
})

type ArtistsTabType = 'Today' | 'This Week' | 'This Month' | 'All Time'

function Artists() {
    const [tab, setTab] = useState<ArtistsTabType>('Today')
    // const {data, isLoading, isError} = useQuery({
    //     queryKey: ['creators'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:3001/creators`)
    //         if (!res.ok) throw new Error('type shi')
    //         return res.json()
    //     }
    // })

    return (
        <div className="w-[1050px] h-max mx-auto">
            {/* title section */}
            <div className="flex flex-col gap-[20px] w-full my-[80px]">
                <p className="font-work-sans font-semibold text-[51px] leading-[110%]">
                    Top Creators
                </p>
                <p className="font-work-sans text-[22px] leading-[160%]">
                    Check out top ranking NFT artists on the NFT Marketplace.
                </p>
            </div>

            <div className="flex w-full h-[60px] bg-green-500">
                {['Today', 'This Week', 'This Month', 'All Time'].map((t, i) => (
                    <div 
                    key={i}
                    onClick={() => setTab(tab as ArtistsTabType)}
                    className={clsx(`w-1/4 place-content-center text-center font-work-sans font-semibold
                        vvvv v vvvvvvvvvvvvvvcccvvvvvvvvyhfgttbffbfbyfgfygfgyy
                        {t}
                        <div className="absolute">

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
