import { useState, useEffect } from "react";
import MiniArrow from "../svg/miniArrow";
import FrequentlyCard from "../ul/frequentlyCard"


const FrequentlyAskedQuestions = () => {

    const [frequentlyShadow, setFrequentlyShadow] = useState(true);
    const [showAllCards, setShowAllCards] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 768);
        };
        
        // Проверяем при монтировании
        handleResize();
        
        // Добавляем слушатель изменений
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    return (
        <>
            <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left"><span className="text-green60">Frequently </span>Asked Questions</h2>
            <p className="mb-[80px] md:w-4/5 text-sm font-light md:text-[18px] text-center md:text-left">Still you have any questions? Contact our Team via support@yourbank.com</p>
            <div className="flex flex-wrap gap-[30px]"> 
            <FrequentlyCard 
                title="How do I open an account with YourBank?"
                text={`Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.`}
            />
            <FrequentlyCard 
                title="What documents do I need to provide to apply for a loan?"
                text={`The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.`}
            />
            <FrequentlyCard 
                title="How can I access my accounts online?"
                text={`Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`}
                shadow = {(isDesktop && frequentlyShadow) && !showAllCards}
            />
            <FrequentlyCard 
                title="Are my transactions and personal information secure?"
                text={`At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.`}
                shadow = {frequentlyShadow && !showAllCards}
            />
            {showAllCards && (
                <>
                <FrequentlyCard 
                    title="Can I transfer money between accounts?"
                    text={`lorem secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you`}
                    shadow = {isDesktop ? frequentlyShadow : false}
                />
                <FrequentlyCard 
                    title="Can I transfer money between accounts?"
                    text={`lorem secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you`}
                    shadow = {frequentlyShadow}
                />
                </>
            )}
            </div>
            <button onClick={() => setShowAllCards(!showAllCards)} className={`flex self-center items-center px-[24px] py-[18px] gap-x-[10px] bg-grey11 border-[1px] border-grey15 rounded-full text-[18px] font-light cursor-pointer whitespace-nowrap w-fit ${showAllCards && "hidden"}`}>Load All FAQ’s<MiniArrow /></button>
        </>
    )
}

export default FrequentlyAskedQuestions