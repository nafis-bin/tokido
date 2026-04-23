import clsx from 'clsx'

type CreatorAvatar = {
    name: string;
    avatarImg: string;
    totalSales: number;
}

const creators: CreatorAvatar[] = [
    {
        name: 'Keepitreal',
        avatarImg: 'Keepitreal.png',
        totalSales: 34.53,
    },
    {
        name: 'BlueWhale',
        avatarImg: 'BlueWhale.png',
        totalSales: 34.53,
    },
    {
        name: 'DigiLab',
        avatarImg: 'DigiLab.png',
        totalSales: 34.53,
    },
    {
        name: 'Dotgu',
        avatarImg: 'Dotgu.png',
        totalSales: 34.53,
    },
    {
        name: 'Ghiblier',
        avatarImg: 'Ghiblier.png',
        totalSales: 34.53,
    },
    {
        name: 'GravityOne',
        avatarImg: 'GravityOne.png',
        totalSales: 34.53,
    },
    {
        name: 'Juanie',
        avatarImg: 'Juanie.png',
        totalSales: 34.53,
    },
    {
        name: 'Mr Fox',
        avatarImg: 'Mr-Fox.png',
        totalSales: 34.53,
    },
    {
        name: 'Robotica',
        avatarImg: 'Robotica.png',
        totalSales: 34.53,
    },
    {
        name: 'RustyRobot',
        avatarImg: 'RustyRobot.png',
        totalSales: 34.53,
    },
    {
        name: 'Shroomie',
        avatarImg: 'Shroomie.png',
        totalSales: 34.53,
    },
    {
        name: 'HelmetGal',
        avatarImg: 'HelmetGal.png',
        totalSales: 34.53,
    },
]

const TopCreatorSection = () => {
    return (
        <div className="max-w-[1280px] h-[1085px] mx-auto px-[115px] py-[80px] max-md:w-[690px] 
        max-md:px-0 max-md:py-0 max-md:h-max max-md:my-[40px] max-sm:w-[315px]">
            {/* top creator header */}
            <div className="flex justify-between max-w-[1050px] h-[91px] max-md:w-full max-md:h-[93px]">
                <div className="flex flex-col gap-[10px] h-full max-md:w-[343px]">
                    <p className="font-work-sans text-[38px] font-semibold leading-[120%]
                    max-md:text-[28px] max-md:leading-[140%]">
                        Top creators
                    </p>
                    <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                        Checkout Top Rated Creators on the NFT Marketplace
                    </p>
                </div>

                <button className="hidden gap-[12px] items-center justify-center self-baseline-last w-[247px] h-[60px] rounded-[20px] 
                sm:flex outline-2 outline-offset-[-1px] outline-ctoa">
                    <img 
                        className="size-[20px]"
                        src="/icons/RocketLaunch.png" 
                        alt="rocket icon" 
                    />
                    <span className="font-work-sans text-[16px] font-semibold leading-[140%]">
                        View Rankings
                    </span>
                </button>
            </div>

            {/* top creator grid */}
            <div className="grid grid-cols-4 gap-[30px] max-w-[1050px] h-[774px] mt-[60px] 
            max-md:mt-[40px] max-md:w-[690px] max-md:h-max max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[20px]">
                {/* single box */}
                {creators.map((person, id) => (
                    <div key={id} className={clsx(`relative flex flex-col items-center gap-[20px] w-[240px] h-[238px] 
                    bg-[#3b3b3b] rounded-[20px] p-[20px] max-md:w-[330px] max-md:h-[100px] max-md:flex-row max-sm:w-[315px]`, {
                        "max-md:hidden": id > 5,
                        "max-sm:hidden": id > 4,
                    })}>
                        <img 
                            className="size-[120px] rounded-[100px] max-md:size-[60px] max-md:rounded-full"
                            src={`/avatars/${person.avatarImg}`}
                            alt="" 
                        />
                        <div className="flex flex-col gap-[5px] w-[200px] items-center max-md:w-[210px] max-md:items-start">
                            <p className="font-work-sans font-semibold text-[22px] leading-[140%]">
                                {person.name}
                            </p>
                            <p className="font-work-sans font-normal text-[16px] leading-[140%] text-[#858584]">
                                Total Sales: 
                                <span className="font-space-mono font-normal text-[16px] leading-[140%] text-white">
                                    {" "}{person.totalSales} ETH
                                </span>
                            </p>
                        </div>
                        <div className="absolute top-[18px] left-[20px] size-[30px] rounded-[20px] text-[#858584] bg-[#2b2b2b] 
                        font-space-mono text-[16px] leading-[140%] grid place-items-center max-md:top-[13px] max-md:left-[12px]">
                            {id + 1}
                        </div>
                    </div>
                ))}

            </div>
            

            <button className="hidden gap-[12px] items-center justify-center w-[315px] h-[60px] mt-[40px] rounded-[20px] 
            max-sm:flex outline-2 outline-offset-[-1px] outline-ctoa">
                <img 
                    className="size-[20px]"
                    src="/icons/RocketLaunch.png" 
                    alt="rocket icon" 
                />
                <span className="font-work-sans text-[16px] font-semibold leading-[140%]">
                    View Rankings
                </span>
            </button>
        </div>
    )
}

export default TopCreatorSection