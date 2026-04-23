import Category from "./Category"

type CategoryInfo = {
    imgSrc: string;
    title: string;
}

const allCategories: CategoryInfo[] = [
    {
        imgSrc: 'art.png',
        title: 'Art',
    },
    {
        imgSrc: 'virtual-worlds.png',
        title: 'Virtual',
    },
    {
        imgSrc: 'video.png',
        title: 'Video',
    },
    {
        imgSrc: 'utility.png',
        title: 'Utility',
    },
    {
        imgSrc: 'sport.png',
        title: 'Sport',
    },
    {
        imgSrc: 'collectabiles.png',
        title: 'Collectabiles',
    },
    {
        imgSrc: 'music.png',
        title: 'Music',
    },
    {
        imgSrc: 'photography.png',
        title: 'Photography',
    },
]


const Categories = () => {
    return (
        <div className="w-full h-[662px] max-md:h-[470px] max-sm:h-[918px] grid grid-cols-4 
        max-sm:grid-cols-2 gap-[30px] max-sm:gap-[20px] mt-[60px] max-md:mt-[40px]">
            {allCategories.map((cat, i) => (
                <Category key={i} imgSrc={cat.imgSrc} title={cat.title} />
            ))}
        </div>
    )
}

export default Categories