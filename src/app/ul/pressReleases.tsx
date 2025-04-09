import Image from "next/image";
import { FC } from "react";


interface PressReleasesProps {
    img: {
        src: string; // Чтобы можно было использовать img.src
        alt?: string; // Опциональное описание изображения
    }
    title: string
    lacation: string
    date: string
    text: string
}

const PressReleases: FC<PressReleasesProps> = ({ img, title, lacation, date, text }) => {
    return (
        <div className="p-[30px] bg-grey11 rounded-3xl w-full xl:w-[calc(50%-15px)]">
            <Image className="mb-[51px] w-full rounded-3xl" src={img.src} alt="" width={200} height={0} />
            <h3 className="mb-3.5 text-2xl text-left">{title}</h3>
            <ul className="px-[16px] mb-[30px] flex gap-x-[10px] ">
                <li className="bg-grey20 text-[18px] font-light rounded-full">Location: {lacation}</li>
                <li className="bg-grey20 text-[18px] font-light rounded-full">Date: {date}</li>
            </ul>
            <p className="text-[18px] font-light">{text}</p>
        </div>
    )
}

export default PressReleases