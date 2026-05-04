// import CallToActionButton from "./CallToActionButton"

import { useState } from "react"

const CallToActionSection = () => {
    const [mail, setMail] = useState('')


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(mail)
        setMail('')
    }

    return (
        <div className="flex items-center gap-[80px] max-md:gap-[30px] w-[1050px] h-[430px] mt-[120px] mb-[80px] max-md:w-[690px] max-md:h-[360px]
        rounded-[20px] p-[60px] bg-[#3b3b3b] mx-auto max-md:px-[30px] max-md:py-[40px] max-md:mt-[80px] max-sm:w-[315px] max-sm:h-[565px]
        max-sm:p-0 max-sm:flex-col max-sm:bg-main">
            <img 
                className="w-[425px] h-[310px] max-md:w-[300px] max-md:h-[280px] object-cover rounded-[20px]
                max-sm:w-[315px] max-sm:h-[255px]" 
                src="/call-to-action.png" alt="space dude" 
            />
            <div className="flex flex-col gap-[40px] w-[425px] h-[272px] max-md:w-[300px] max-md:h-[280px] max-sm:w-[315px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="font-work-sans text-[38px] leading-[120%] font-semibold max-md:text-[28px]
                    max-md:leading-[140%]">
                        Join our weekly <br/> digest
                    </p>
                    <p className="font-work-sans text-[22px] leading-[160%] max-md:text-[16px] max-md:leading-[140%]">
                        Get exclusive promotions & updates straight to your inbox.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center justify-between w-[425px] h-[60px] bg-white rounded-[20px] pl-[20px] max-sm:w-[315px]
                    max-md:w-[300px] max-md:h-[108px] max-md:flex-col max-md:gap-[16px] max-md:bg-[#3b3b3b] max-sm:bg-main max-md:pl-0"
                >
                    <input 
                        value={mail}
                        placeholder="Enter your email here"
                        onChange={(e) => setMail(e.target.value)}
                        className="focus:outline-none font-work-sans text-[16px] leading-[140%] text-[#2b2b2b] max-md:bg-white
                        max-md:w-[300px] max-sm:w-[315px] max-md:h-[46px] max-md:px-[20px] max-md:py-[16px] rounded-[20px]" 
                    />
                    <button 
                        type="submit" 
                        className="flex gap-3 w-[211px] h-[60px] items-center justify-center bg-ctoa
                        rounded-[20px] max-md:w-[300px] max-md:h-[46px] max-sm:w-[315px]"
                    >
                        <img className="size-[20px]" src="/mail-icon.png" alt="mail icon" />
                        <p className="font-work-sans font-semibold text-[16px] leading-[140%] text-white">
                            Subscribe
                        </p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CallToActionSection