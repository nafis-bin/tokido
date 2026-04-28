import StepCard from "./StepCard"

const StepbyStep = () => {
    return (
        <div className="max-w-[1050px] h-max mx-auto mt-[80px] max-md:mt-[40px] max-md:w-[690px] max-sm:w-[315px]">
            {/* title section */}
            <div className="flex flex-col gap-[10px]">
                <p className="font-work-sans text-[38px] leading-[120%] 
                max-md:text-[28px] max-md:leading-[140%] font-semibold">
                    How it works
                </p>
                <p className="font-work-sans text-[22px] leading-[160%]
                max-md:text-[16px] max-md:leading-[140%]">
                    Find out how to get started
                </p>
            </div>

            {/* cards folded */}
            <div className="flex max-sm:flex-col max-sm:gap-[20px] gap-[30px] mt-[48px] max-md:mt-[40px] 
            w-full h-[439px] max-md:h-[337px] max-sm:h-[494px]">

                {/* single cards */}
                <StepCard 
                    imgSrc="/setup-icons/setup-icon-1.png" 
                    title="Setup Your wallet" 
                    content="Set up your wallet of choice. Connect it to the Animarket by 
                    clicking the wallet icon in the top right corner." 
                /> 
                <StepCard 
                    imgSrc="/setup-icons/setup-icon-2.png" 
                    title="Create Collection" 
                    content="Upload your work and setup your collection. Add a description,
                    social links and floor price." 
                /> 
                <StepCard 
                    imgSrc="/setup-icons/setup-icon-3.png" 
                    title="Start Earning" 
                    content="Choose between auctions and fixed-price listings.
                    Start earning by selling your NFTs or trading others." 
                /> 

            </div>
        </div>
    )
}

export default StepbyStep