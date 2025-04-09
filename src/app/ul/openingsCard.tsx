import { FC } from "react"
import Portfel from "../svg/portfel"
import ButtonGreen from "./buttonGreen"

interface OpeningsCardProps {
    title: string
    info1: string
    info2: string
    text: string
    li1: string
    li2: string
    li3: string
    li4: string
    li5: string
}

const OpeningsCard:FC<OpeningsCardProps> = ({ title, info1, info2, text, li1, li2, li3, li4, li5 }) => {
    return (
        <div className="flex flex-col gap-y-5 bg-grey11 rounded-2xl p-5 sm:p-[50px] w-full xl:w-[calc(50%-10px)]">
            <div className="flex mb-[50px] flex-col gap-y-3.5">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <ul className="flex flex-col sm:flex-row">
                    <li className="text-[18px] font-light px-4 py-2 bg-grey20 rounded-full">{info1}</li>
                    <li className="text-[18px] font-light px-4 py-2 bg-grey20 rounded-full">{info2}</li>
                </ul>
            </div>
            <div className="flex mb-[40px] flex-col gap-y-5">
                <h3 className="text-2xl font-semibold">About This Job</h3>
                <p className="text-[18px] font-light">{text}</p>
            </div>
            <div className="flex mb-[50px] flex-col grow gap-y-5">
                <h3 className="text-2xl font-semibold">Requirements & Qualifications</h3>
                <ul className="flex flex-col gap-y-3.5">
                    <li className="flex items-center gap-x-[11px] text-[18px] font-light"><Portfel />{li1}</li>
                    <li className="flex items-center gap-x-[11px] text-[18px] font-light"><Portfel />{li2}</li>
                    <li className="flex items-center gap-x-[11px] text-[18px] font-light"><Portfel />{li3}</li>
                    <li className="flex items-center gap-x-[11px] text-[18px] font-light"><Portfel />{li4}</li>
                    <li className="flex items-center gap-x-[11px] text-[18px] font-light"><Portfel />{li5}</li>
                </ul>
            </div>
            <div className="flex justify-center sm:justify-start">
                <ButtonGreen text="Apply now" />
            </div>
        </div>
    )
}

export default OpeningsCard