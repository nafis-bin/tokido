const Category = ({ imgSrc, title }: { imgSrc: string; title: string}) => {
    return (
        <div className="flex flex-col w-[240px] h-[316px] rounded-[20px] max-md:w-[150px] max-md:h-[209px]
        max-sm:w-[147.5px]">
            <div className="w-full h-[240px] max-md:h-[142px]">
                <img 
                    className="w-full h-full"
                    src={`/category-icons/${imgSrc}`}
                    alt="art" 
                />
            </div>
            <div className="flex w-full h-[76px] px-[30px] pt-[20px] pb-[25px] rounded-b-[20px]
             font-work-sans font-semibold text-[22px] leading-[140%] bg-[#3b3b3b] max-md:px-[20px]
             max-md:h-[67px] max-md:text-[16px]">
                {title}
            </div>
        </div>
    )
}

export default Category