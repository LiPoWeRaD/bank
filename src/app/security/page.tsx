"use client"

import SectionCarAbout from "../ul/sectionCarAbout"
import UseCases3 from "../ul/UseCases3";
import security from "../assets/Security.jpg";
import SecureOnlineBankingPlatform from "../assets/SecureOnlineBankingPlatform.png";
import MultiFactorAuthentication from "../assets/MultiFactorAuthentication.png";
import FraudMonitoring from "../assets/FraudMonitoring.png";
import SecureMobileBanking from "../assets/SecureMobileBanking.png";
import FrequentlyAskedQuestions from "../components/frequentlyAskedQuestions";

const Security = () => {
    return (
        <main className="flex mt-[50px] flex-col justify-between items-center">
            <SectionCarAbout 
                title={`Your Security is Our  <span className="text-green60">Top Priority</span>`} 
                text={`At YourBank, we understand the importance of keeping your financial information secure. 
                       We employ robust security measures and advanced technologies to protect your personal and financial data. 
                       Rest assured that when you bank with us, your security is our utmost priority.`} 
                img={security} />
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto">
                <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">
                    How We <span className="text-green60">Protect You</span>
                </h2>
                <p className="mb-[50px] text-sm font-light md:text-[18px]">
                    At YourBank, we prioritize the security and confidentiality of your financial information. 
                    Our state-of-the-art encryption technology and stringent data protection measures ensure your 
                    assets and transactions are safeguarded at all times
                </p>
                <div className="relative px-[30px] lg:px-[94px] pt-[92px]">
                    <div className="absolute h-10/12 inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
                    <UseCases3 
                            img1={SecureOnlineBankingPlatform.src} 
                            title1="Secure Online Banking Platform" 
                            text1="Our online banking platform is built with multiple layers of security to safeguard your information. 
                            We utilize industry-standard encryption protocols to ensure that your data remains 
                            confidential and protected during transmission."
                            img2={MultiFactorAuthentication.src} 
                            title2="Multi-Factor Authentication" 
                            text2="To enhance the security of your online banking experience, we employ multi-factor authentication. 
                            This additional layer of security requires you to provide multiple pieces of identification, 
                            such as a password and a one-time verification code, to access your account."
                            img3={FraudMonitoring.src} 
                            title3="Fraud Monitoring" 
                            text3="We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. 
                            Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind." 
                            img4={SecureMobileBanking.src} 
                            title4="Secure Mobile Banking" 
                            text4="Our mobile banking app is designed with the same level of security as our online banking platform. 
                            You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected."
                        />
                </div>
            </section>
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-col px-[30px]">
                <FrequentlyAskedQuestions />
            </section>
        </main>
    )
}

export default Security