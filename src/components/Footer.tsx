import { useState } from "react"
import ContactButton from "./contactButton"

const Footer = () => {
    const [mail, setMail] = useState('')

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        console.log(mail)
        setMail('')
    }

    return (
        <div className="w-screen h-[334px] bg-secondary max-sm:mt-[40px] pt-[40px] max-md:h-max">
            <div className="flex w-[987.41px] h-[196.2px] mx-auto max-md:flex-col max-md:w-[690px] max-md:h-max 
            max-sm:w-[315px] max-md:gap-[30px]">
                {/* single column */}
                <div className="w-[327.41px] h-full text-footerGray max-md:w-full max-md:h-[163px] max-sm:h-[185px]">
                    <div className="flex gap-3 items-center">
                        <img 
                            className="size-[32px]"
                            src="/storefront.png" 
                            alt="storefront icon" 
                        />
                        <p className="font-space-mono font-bold text-[20px] leading-[160%]">
                            NFT Marketplace
                        </p>
                    </div>
                    <div className="w-[238px] text-footerGray font-work-sans text-[16px] leading-[140%] mt-[30px] max-md:mt-[20px]
                    max-md:w-full">
                        NFT marketplace ui created with anima for figma.
                    </div>
                    <div className="text-footerGray font-work-sans text-[16px] leading-[140%] mt-[20px]">
                        Join our community
                    </div>
                    <div className="flex gap-[10px] w-[158px] h-[32px] mt-[15px]">
                        <a href="#">
                            <img 
                                className="size-8" 
                                src="/discord-logo.png" 
                                alt="discord logo" 
                            />
                        </a>
                        <a href="#">
                            <img 
                                className="size-8" 
                                src="/youtube-logo.png" 
                                alt="youtube logo" 
                            />
                        </a>
                        <a href="#">
                            <img 
                                className="size-8" 
                                src="/twitter-logo.png" 
                                alt="twitter logo" 
                            />
                        </a>
                        <a href="#">
                            <img 
                                className="size-8" 
                                src="/instagram-logo.png" 
                                alt="instagram logo" 
                            />
                        </a>
                    </div>
                </div>

                <div className="w-[240px] h-max max-md:w-full max-md:h-[161px]">
                    <p className="font-space-mono text-[22px] font-bold leading-[160%]">
                        Explore
                    </p>
                    <p className="mt-[25px] max-md:mt-[20px] font-work-sans text-footerGray text-[16px] leading-[140%]">
                        Marketplace
                    </p>
                    <p className="mt-[20px] font-work-sans text-footerGray text-[16px] leading-[140%]">
                        Rankings
                    </p>
                    <p className="mt-[20px] font-work-sans text-footerGray text-[16px] leading-[140%]">
                        Connect a wallet
                    </p>
                </div>

                <div className="w-[420px] h-max max-md:w-full max-md:h-[157px] max-sm:h-[227px]">
                    <p className="font-space-mono text-[22px] font-bold leading-[160%]">
                        Join our weekly digest
                    </p>
                    <p className="w-[330px] mt-[25px] max-md:mt-[20px] mb-[20px] font-work-sans text-footerGray 
                    max-md:w-full text-[16px] leading-[140%]">
                        Get exclusive promotions & updates straight to your inbox.
                    </p>

                    <ContactButton />
                
                    <form 
                        onSubmit={handleSubmit}
                        className="hidden flex-col gap-4 max-sm:flex"
                    >
                        <input 
                            type="text" 
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="Enter Your Email Address"
                            className="w-full h-[46px] py-5 px-3 font-work-sans text-[16px] bg-white 
                            rounded-[20px] leading-[140] text-[#2b2b2b] outline-none"
                        />
                        <button 
                            className="flex items-center gap-3 justify-center w-full h-[46px] bg-ctoa rounded-[20px]"
                            type="submit"
                        >
                            <img 
                            className="size-5"
                            src="mail-icon.png" alt="mail icon" />
                            <p className="font-work-sans text-[16px] leading-[140%] font-semibold">
                                Subscribe
                            </p>
                        </button>
                    </form>
                </div>
            </div>
            <footer className="w-[1050px] pb-[40px] h-[33px] pt-[20px] mt-[30px] max-md:mt-[49px] mx-auto border-t
            max-md:w-[690px] max-sm:w-[315px] border-[#858584]">
                <p className="text-[12px] font-work-sans text-footerGray leading-[110%]">
                    Ⓒ NFT Market. Use this template freely.
                </p>
            </footer>
        </div>
    )
}

export default Footer