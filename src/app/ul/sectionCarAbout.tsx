import { FC } from "react";
import parse from 'html-react-parser';
import Image from "next/image";

interface SectionCarAboutProps {
    title: string; // Для передачи всего тега h2 с span внутри
    text: string;
    img: {
        src: string; // Чтобы можно было использовать img.src
        alt?: string; // Опциональное описание изображения
    };
}


const SectionCarAbout:FC<SectionCarAboutProps> = ({ title, text, img }) => {
    return (
        <section className="relative sm:p-[50px] container mb:-[50px] md:mb-[250px] xl:mb-[100px] 2xl:mb-[150px]
                                mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between gap-x-[120px] bg-grey11 rounded-3xl sm:h-[786px]">
                <div className={`absolute top-0 right-0 w-full h-full bg-[image:var(--bg-abstractDesign)] bg-no-repeat sm:bg-[length:500px_500px] [transform:scaleX(-1)]`}></div>
                <div className="relative flex flex-col xl:flex-row xl:items-center  flex-wrap w-full gap-5 z-10">
                    <div className="relative  mt-[200px] md:mt-[300px] lg:mt-[500px] xl:mt-0 p-6 sm:p-[80px] xl:w-2/4 h-fit bg-grey20 rounded-3xl xl:rounded-tr-none xl:rounded-l-none xl:rounded-r-3xl z-10">
                        <h2 className="mb-3.5 text-2xl md:text-5xl text-center lg:text-left">
                            {parse(title)}
                        </h2>
                        <p className="mb-[50px] text-sm font-light md:text-[18px]">
                            {text}
                        </p>
                    </div>
                    <div className="absolute top-0 xl:top-[0px] xl:right-[50px] bottom-[50px] w-full xl:w-4/7 xl:h-[calc(130%-100px)] 2xl:h-[calc(150%-100px)]">
                        <Image 
                            src={img.src} 
                            alt="YourBank Careers Team" 
                            className="w-full h-full object-cover rounded-3xl"
                            width={200}
                            height={0}
                        />
                    </div>
                </div>
            </section>
    )
}

export default SectionCarAbout