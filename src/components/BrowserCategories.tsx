import Categories from "./Categories"

const BrowserCategories = () => {
    return (
        <div className="max-w-[1050px] mx-auto my-[80px] max-md:w-[690px] max-md:my-[40px]
         max-sm:w-[315px]">
            <h2 className="w-full font-work-sans text-[38px] font-semibold leading-[120%] max-md:text-[28px]
            max-md:leading-[140%]">
                Browse Categories
            </h2>
            <Categories />
        </div>
    )
}

export default BrowserCategories