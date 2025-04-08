import { FC } from "react";

interface UseCasesProps {
    title: string;
    text: string;
    percent1: string;
    percent2: string;
    percent3: string;
    info1: string;
    info2: string;
    info3: string;
}

const UseCases2:FC<UseCasesProps> = ({ title, text, percent1, percent2, percent3, info1, info2, info3 }) => {
    return (
        <div className="flex p-[30px] flex-col"> 
            <p className="mb-[14px] text-[30px] text-center md:text-left">{title}</p>
            <p className="mb-[50px] text-[18px] font-light text-center md:text-left">{text}</p>
            <div className="flex flex-col md:flex-row mb-[42px] justify-between items-center md:items-start">
                <div className="flex pb-[50px] md:pb-0 md:pr-[50px] flex-col items-center md:items-start">
                    <p className="text-[58px] text-green60">{percent1}</p>
                    <p className="text-[18px] font-light">{info1}</p>
                </div>
                <div className="flex py-[50px] md:py-0 md:px-[50px] flex-col border-y-2 md:border-y-0 md:border-x-2 border-grey15 border-dashed items-center md:items-start">
                    <p className="text-[58px] text-green60">{percent2}</p>
                    <p className="text-[18px] font-light">{info2}</p>
                </div>
                <div className="flex pt-[50px] md:pt-0 md:pl-[50px] flex-col items-center md:items-start">
                    <p className="text-[58px] text-green60">{percent3}</p>
                    <p className="text-[18px] font-light">{info3}</p>
                </div>
            </div>
            <button className="mx-auto md:mx-0 px-[18px] py-[15px] bg-grey11 border-[1px] border-grey15 rounded-full text-[18px] font-light w-fit cursor-pointer">Learn more</button>
        </div>
    )
}

export default UseCases2