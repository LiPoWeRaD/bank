import Image from "next/image"
import { FC } from "react"


interface MissionVisionProps {
    title1: string
    title2: string
    text1: string
    text2: string
    img1: {
        src: string; // Чтобы можно было использовать img.src
        alt?: string; // Опциональное описание изображения
    };
    img2: {
        src: string; // Чтобы можно было использовать img.src
        alt?: string; // Опциональное описание изображения
    };
}

const MissionVision:FC<MissionVisionProps> = ({title1, title2, text1, text2, img1, img2}) => {
    return (
        <div className="flex flex-wrap flex-col gap-y-[50px] lg:flex-row justify-between">
            <div className="flex items-center justify-between flex-col lg:flex-row">
                <div className="relative p-[57px] pb-0 bg-grey11 rounded-2xl w-[100%] lg:w-[40%]">
                    <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
                    <Image className="rounded-t-[50px] w-full h-full object-cover" src={img1.src} alt="" width={200} height={0} />
                </div>
                <div className="flex flex-col gap-y-[20px] pt-[30px] lg:pt-0 border-t-[2px] lg:border-t-0 lg:border-l-[2px] border-green60 lg:pl-[50px] w-[100%] lg:w-[60%]">
                    <h3 className="text-[32px] xl:text-[38px] text-center lg:text-left">{title1}</h3>
                    <p className="text-[16px] xl:text-[18px] font-light text-center lg:text-left">{text1}</p>
                </div>
            </div>
            <div className="flex xl:-mt-16 items-center justify-between flex-col-reverse  lg:flex-row">
                <div className="flex flex-col gap-y-[20px] pt-[30px] lg:pt-0 border-t-[2px] lg:border-t-0 lg:border-r-[2px] border-green60 lg:pr-[50px] w-[100%] lg:w-[60%]">
                    <h3 className="text-[32px] xl:text-[38px] text-center lg:text-right">{title2}</h3>
                    <p className="text-[16px] xl:text-[18px] font-light text-center lg:text-right">{text2}</p>
                </div>
                <div className="relative p-[57px] pb-0 bg-grey11 rounded-2xl w-[100%] lg:w-[40%]">
                    <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
                    <Image className="rounded-t-[50px] w-full h-full object-cover" src={img2.src} alt="" width={200} height={0} />
                </div>
            </div>
        </div>
    )
}

export default MissionVision