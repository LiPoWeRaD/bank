import ButtonGreen from "../ul/buttonGreen"


const StartCareer = () => {
    return (
        <>
            <div className="relative flex flex-wrap p-[50px] gap-5 bg-grey11 rounded-2xl overflow-hidden">
            {/* Фоновое изображение */}
            <div className={`absolute top-0 right-0 w-full h-full bg-[image:var(--bg-abstractDesign)] bg-no-repeat bg-[length:350px_350px]`}></div>
            <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
            {/* Карточки с одинаковой шириной */}
            <div className="flex flex-col md:flex-row items-center  flex-wrap w-full gap-5 z-10">
                <div className="flex p-[30px] flex-col flex-1 max-w-6xl">
                    <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">Start your financial journey with <span className="text-green60">YourBank today!</span></h2>
                    <p className="text-center md:text-left text-sm font-light md:text-[18px]">Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
                </div>
                <div className="flex items-center">
                    <ButtonGreen text="Open Account" />
                </div>
            </div>
            </div>
        </>
    )
}

export default StartCareer