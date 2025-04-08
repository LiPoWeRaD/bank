import { FC } from "react"
import Quotation from "../svg/quotation"


interface TestimonialsCardProps {
    bg?: 'left' | 'right' | 'none';
    text: string
    name: string
    className?: string
}

const TestimonialsCard: FC<TestimonialsCardProps> = ({ text, name, bg = 'none', className }) => {
    return (
      <div className={`min-w-[calc(33.333% - 20px)] flex-shrink-0 max-w-[404px] rounded-2xl z-50 ${
        bg === 'left' 
          ? 'bg-gradient-to-l from-grey30/30 via-grey30/10 to-grey30/1' 
          : bg === 'right' 
            ? 'bg-gradient-to-r from-grey30/30 via-grey30/10 to-grey30/1' 
            : 'bg-grey30'
      } ${className}`}>
        <div className="flex py-2.5 flex-col gap-x-4 gap-y-[50px] p-[50px]">
          <div className="flex gap-x-4 items-center justify-between">
            <span className="w-full border-b-[2px] border-grey15"></span>
            <span className=""><Quotation /></span>
            <span className="w-full border-b-[2px] border-grey15"></span>
          </div>
          <p className="text-[18px] text-center font-light">{text}</p>
          <p className="text-[18px] text-center text-green60 font-medium">{name}</p>
        </div>
      </div>
    )
  }

export default TestimonialsCard