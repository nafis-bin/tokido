import type { Art } from "../utilities"
import clsx from "clsx"

type ArtCardType = Art & {
    mode: 'light' | 'dark'
}

const ArtCard = ({ imgSrc, artist, title, price, bid, artistIcon, mode }: ArtCardType) => {
    return (
        <div className={clsx(`w-[330px] h-[469px] rounded-[20px] bg-[#2b2b2b] max-sm:w-[315px] max-sm:h-[402px]`,
           mode === 'light' && `bg-[#3b3b3b]`
        )}>
            <img 
            src={imgSrc}
            className="w-full h-[295px] rounded-t-[20px] object-fill max-sm:h-[238px]" 
            alt="card background image" />

            <div className="flex flex-col gap-[5px] mt-[20px] mx-[30px] w-[270px] h-[60px] max-sm:w-[275px] max-sm:mx-[20px]">
                <p className="font-work-sans text-[22px] leading-[140%]">{title}</p>
                <div className="flex gap-[12px] items-center w-full h-[24px]">
                    <img 
                        className="size-[24px]"
                        src={artistIcon} alt="artist icon" 
                    />
                    <p className="font-space-mono text-[16px] leading-[140%]">{artist}</p>
                </div>
            </div>

            <div className="mt-[25px] flex w-[270px] h-[43px] mx-[30px] max-sm:w-[275px] max-sm:h-[34px] max-sm:mx-[20px]">
                <div className="flex flex-col gap-2 w-[135px] h-full max-sm:w-[137.5px]">
                    <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">Price</p>
                    <p className="text-[16px] leading-[140%] max-sm:text-[12px] max-sm:leading-[110%]">
                        {price} ETH
                    </p>
                </div>
                <div className="flex flex-col gap-2 w-[135px] h-full max-sm:w-[137.5px]">
                    <p className="font-space-mono text-[12px] self-end leading-[110%] text-[#858584]">Highest Bid</p>
                    <p className="text-[16px] leading-[140%] self-end max-sm:text-[12px] max-sm:leading-[110%]">
                        {bid} ETH
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArtCard