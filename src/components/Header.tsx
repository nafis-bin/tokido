import mainLogo from '../assets/logo.png'
import userLogo from '../assets/User.png'

const Header = () => {
    return (
        <>
            <header className="max-w-[1280px] mx-auto">
                <nav className="flex max-w-[1280px] h-[100px] bg-main px-[50px] items-center justify-between">
                <div>
                    <img 
                    src={mainLogo} 
                    alt="logo" 
                    className="w-[243px] h-[32px]"
                    />
                </div>
                <div className="w-[607px] h-[60px] bg-main">
                    <ul className="w-full h-full flex items-center gap-[10px]">
                    <li className="bg-main hover:cursor-pointer hover:text-p5 py-[12px] px-[20px] my-[7px] font-work-sans font-semibold leading-[1.4] text-white text-[16px]">
                        Marketplace
                    </li>
                    <li className="bg-main hover:cursor-pointer hover:text-p5 py-[12px] px-[20px] my-[7px] font-work-sans font-semibold leading-[1.4] text-white text-[16px]">
                        Rankings
                    </li>
                    <li className="bg-main hover:cursor-pointer hover:text-p5 py-[12px] px-[20px] my-[7px] font-work-sans font-semibold leading-[1.4] text-white text-[16px]">
                        Connect a wallet
                    </li>
                    <button className="flex w-[152px] h-[60px] rounded-[20px] text-white px-[30px] gap-3 items-center justify-between bg-call">
                        <img src={userLogo} alt="user logo" className="size-5 text-white" />
                        <p className="font-work-sans font-semibold text-[16px] text-white">Sign up</p>
                    </button>
                    </ul>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header;