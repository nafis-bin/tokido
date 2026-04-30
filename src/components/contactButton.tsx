import { useState } from "react"

const ContactButton = () => {
    const [mail, setMail] = useState('')

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(mail)
        setMail('')
    }

    return (
        <form onSubmit={handleSubmit} className="hidden w-[420px] h-[60px] bg-white rounded-[20px] sm:flex">
            <input 
                type="text" 
                value={mail} 
                onChange={(e) => setMail(e.target.value)}
                placeholder="Enter your email here"
                className="flex-1 rounded-[20px] pl-[20px] pr-3 py-[19px] text-[#2b2b2b] font-work-sans
                text-[16px] leading-[140%] outline-none"
            />
            <button 
                type="submit"
                className="w-[179px] h-[60px] bg-ctoa text-white text-[16px] leading-[140%]
                font-semibold rounded-[20px]"
            >
                Subscribe
            </button>
        </form>
    )
}

export default ContactButton