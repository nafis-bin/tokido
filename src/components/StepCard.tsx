const StepCard = ({ imgSrc, title, content }: {imgSrc: string, title: string, content: string}) => {
    return (
        <div className="flex flex-col items-center w-[330px] h-full max-md:w-[210px] max-sm:pt-0 max-sm:px-[20px] 
            max-sm:w-full max-sm:h-[157px] rounded-[20px] bg-[#3b3b3b] pt-[10px] max-sm:flex-row max-sm:gap-[20px]">
                <img 
                    className="size-[250px] max-md:size-[160px] max-sm:size-[100px]"
                    src={imgSrc} alt="icon" 
                />
                
                {/* these two are hidden in small screens */}
                <p className="hidden sm:block text-center mt-[20px] font-work-sans text-[22px] leading-[140%] font-semibold w-[270px]
                max-md:w-[170px] max-md:text-[16px]">
                    {title}
                </p>
                <p className="hidden sm:block text-center mt-[10px] font-work-sans text-[16px] max-md:text-[12px] leading-[140%] 
                max-md:w-[170px] w-[270px]">
                    {content}
                </p>

                {/* visible in small screens */}
                <div className="hidden flex-col gap-[10px] w-[155px] h-max max-sm:flex">
                    <p className="font-work-sans font-semibold text-[16px] leading-[140%]">
                        {title}
                    </p>
                    <p className="font-work-sans text-[12px] leading-[140%]">
                        {content}
                    </p>
                </div>
        </div>
    )
}

export default StepCard