import { FC } from "react"

interface ValuesProps {
    title: string
    text: string
}

const Values:FC<ValuesProps> = ({ title, text }) => {
    return (
        <div className="flex flex-col gap-y-[30px]  px-[30px] w-full xl:w-[calc(50%-40px)] border-l-[1px] border-green60">
            <p className="text-[30px] sm:text-[58px] text-grey40 whitespace-nowrap">{title}</p>
            <p className="text-[14px] sm:text-[18px] font-light">{text}</p>
        </div>
    )
}

export default Values