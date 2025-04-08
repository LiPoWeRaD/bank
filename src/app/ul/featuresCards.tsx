import { FC } from "react"
import Arrowtl from "../svg/arrowtl"

interface FeaturesCardsProps {
    title: string
    text: string
}

const FeaturesCards:FC<FeaturesCardsProps> = ({ title, text }) => {
    return (
        <div className="flex flex-col gap-y-5 bg-grey20 rounded-2xl p-[50px] w-full  xl:w-[calc(50%-30px)]">
            <div className="flex justify-between  items-center">
                <p className="text-[22px]">{title}</p>
                <Arrowtl />
            </div>
            <p className="text-[18px] font-light">{text}</p>
        </div>
    )
}

export default FeaturesCards