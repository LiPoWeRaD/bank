import { FC } from "react"

interface FrequentlyCardProps {
    title: string
    text: string
    shadow?: boolean
}

const FrequentlyCard:FC<FrequentlyCardProps> = ({ title, text, shadow = false }) => {
    return (
        <div className={`relative flex flex-col gap-y-5 rounded-2xl p-[50px] w-full md:w-[calc(50%-30px)] overflow-hidden ${!shadow ? "bg-grey20" : "bg-gradient-to-b from-grey20/100 via-grey20/60 to-grey20/0 z-50"}`}>
            {/* Обертка для контента с относительным позиционированием */}
            <div className="relative z-10">
                <p className="pb-[30px] text-[22px] border-b-[1px] border-grey15">{title}</p>
                <p className="pt-[15px] text-[18px] font-light">{text}</p>
            </div>
            
            {/* Градиентное затенение только снизу */}
            {shadow && (
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-grey20/0 via-grey20/0 to-grey20/0 pointer-events-none z-50"></div>
            )}
        </div>
    )
}

export default FrequentlyCard