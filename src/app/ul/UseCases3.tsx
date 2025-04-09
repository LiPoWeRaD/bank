import Image from "next/image"
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
    text1: string
    text2: string
    text3: string
    text4: string
}

const UseCases3:FC<UseCasesProps> = ({ img1, title1, text1, img2, title2, text2, img3, title3, text3, img4, title4, text4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] z-10">
        {/* Карточка 1 */}
        <div className="relative flex p-[30px] flex-col gap-y-5 bg-grey20 rounded-tl-2xl rounded-br-3xl">
            <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-[9px]">
                <Image src={img1} alt={title1} width={100} height={0} />
                <p className="text-[20px] text-center">{title1}</p>
            </div>
            <p className="">{text1}</p>
        </div>

        {/* Карточка 2 */}
        <div className="relative flex p-[30px] flex-col gap-y-5 bg-grey20 rounded-tl-2xl rounded-br-3xl">
            <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-[9px]">
                <Image src={img2} alt={title2} width={100} height={0} />
                <p className="text-[20px] text-center">{title2}</p>
            </div>
            <p className="">{text2}</p>
        </div>

        {/* Карточка 3 */}
        <div className="relative flex p-[30px] flex-col gap-y-5 bg-grey20 rounded-tl-2xl rounded-br-3xl">
            <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-[9px]">
                <Image src={img3} alt={title3} width={100} height={0} />
                <p className="text-[20px] text-center">{title3}</p>
            </div>
            <p className="">{text3}</p>
        </div>

        {/* Карточка 4 */}
        <div className="relative flex p-[30px] flex-col gap-y-5 bg-grey20 rounded-tl-2xl rounded-br-3xl">
            <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-[9px]">
                <Image src={img4} alt={title4} width={100} height={0} />
                <p className="text-[20px] text-center">{title4}</p>
            </div>
            <p className="">{text4}</p>
        </div>
    </div>
  )
}

export default UseCases3