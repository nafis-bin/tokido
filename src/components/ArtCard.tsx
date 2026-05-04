import type { Art } from "../routes/artists/$artistId"

const ArtCard = ({ imgSrc, artist, title, price, bid, artistIcon }: Art) => {
    return (
        <div className="w-[330px] h-[469px] rounded-[20px] bg-[#2b2b2b]">
            <img 
            src={imgSrc}
            className="w-full h-[295px] rounded-t-[20px] object-fill" 
            alt="" />

            <div className="flex flex-col gap-[5px] mt-[20px] mx-[30px] w-[270px] h-[60px]">
                <p className="font-work-sans text-[22px] leading-[140%]">{title}</p>
                <div className="flex gap-[12px] items-center w-full h-[24px]">
                    <img 
                        className="size-[24px]"
                        src={artistIcon} alt="artist icon" 
                    />
                    <p className="font-space-mono text-[16px] leading-[140%]">{artist}</p>
                </div>
            </div>

            <div className="mt-[25px] flex w-[270px] h-[43px] mx-[30px]">
                <div className="flex flex-col gap-2 w-[135px] h-full">
                    <p className="font-space-mono text-[12px] leading-[110%] text-[#858584]">Price</p>
                    <p className="text-[16px] leading-[140%]">{price} ETH</p>
                </div>
                <div className="flex flex-col gap-2 w-[135px] h-full">
                    <p className="font-space-mono text-[12px] self-end leading-[110%] text-[#858584]">Highest Bid</p>
                    <p className="text-[16px] leading-[140%] self-end">{bid} ETH</p>
                </div>
            </div>
        </div>
    )
}

export default ArtCard