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
        <div className="max-w-[1280px] h-[1085px] mx-auto px-[115px] py-[80px]">
            {/* top creator header */}
            <div className="flex justify-between max-w-[1050px] h-[91px]">
                <div className="flex flex-col gap-[10px] h-full">
                    <p className="font-work-sans text-[38px] font-semibold leading-[120%]">
                        Top creators
                    </p>
                    <p className="font-work-sans text-[22px] leading-[160%]">
                        Checkout Top Rated Creators on the NFT Marketplace
                    </p>
                </div>

                <button className="flex gap-[12px] items-center justify-center self-baseline-last w-[247px] h-[60px] rounded-[20px] outline-2 outline-offset-[-1px] outline-ctoa">
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
            <div className="grid grid-cols-4 gap-[30px] max-w-[1050px] h-[774px] mt-[60px]">
                {/* single box */}
                {creators.map((person, id) => (
                    <div key={id} className="relative flex flex-col items-center gap-[20px] w-[240px] h-[238px] bg-[#3b3b3b] rounded-[20px] p-[20px]">
                        <img 
                            className="size-[120px] rounded-[100px]"
                            src={`/avatars/${person.avatarImg}`}
                            alt="" 
                        />
                        <div className="flex flex-col gap-[5px] w-[200px] items-center">
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
                        font-space-mono text-[16px] leading-[140%] grid place-items-center">
                            {id + 1}
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default TopCreatorSection