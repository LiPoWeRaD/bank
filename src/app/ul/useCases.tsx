import { FC } from "react"

interface UseCasesProps {
    img1: string
    img2: string
    img3: string
    img4: string
    title1: string
    title2: string
    title3: string
    title4: string
    left?: boolean
}

const UseCases:FC<UseCasesProps> = ({ img1, title1, img2, title2, img3, title3, img4, title4, left = true }) => {
  return (
    <div className="relative flex flex-wrap p-[50px] gap-5 bg-grey11 rounded-2xl overflow-hidden">
        {/* Фоновое изображение */}
        <div className={`absolute top-0 right-0 w-full h-full bg-[image:var(--bg-abstractDesign)] bg-no-repeat bg-[length:200px_200px] ${left ? "" : "[transform:scaleX(-1)]"}`}></div>
        
        {/* Карточки с одинаковой шириной */}
        <div className="flex flex-wrap w-full gap-5 z-10">
            <div className="flex p-[30px] flex-col items-center gap-y-5 bg-grey20 rounded-2xl flex-1 min-w-[200px]">
                <img src={img1} alt="" />
                <p className="text-[20px] text-center">{title1}</p>
            </div>
            <div className="flex p-[30px] flex-col items-center gap-y-5 bg-grey20 rounded-2xl flex-1 min-w-[200px]">
                <img src={img2} alt="" />
                <p className="text-[20px] text-center">{title2}</p>
            </div>
            <div className="flex p-[30px] flex-col items-center gap-y-5 bg-grey20 rounded-2xl flex-1 min-w-[200px]">
                <img src={img3} alt="" />
                <p className="text-[20px] text-center">{title3}</p>
            </div>
            <div className="flex p-[30px] flex-col items-center gap-y-5 bg-grey20 rounded-2xl flex-1 min-w-[200px]">
                <img src={img4} alt="" />
                <p className="text-[20px] text-center">{title4}</p>
            </div>
        </div>
    </div>
  )
}

export default UseCases