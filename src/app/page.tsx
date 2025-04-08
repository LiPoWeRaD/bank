"use client"

import Llc from "./svg/llc";
import PlusIcon from "./svg/plusIcon";
import Transaction from "./ul/transaction";
import arrow from "../app/assets/arrow.png";
import checkAccount from "../app/assets/chekAccount.png";
import savingAccount from "../app/assets/savingsAccount.png";
import loansAndMortgages from "../app/assets/loansAndMortgages.png";
import managingPersonalFinances from "../app/assets/managingPersonalFinances.png";
import savingForTheFuture from "../app/assets/savingForTheFuture.png";
import homeownership from "../app/assets/Homeownership.png"; 
import educationFunding from "../app/assets/educationFunding.png";
import startupsAndEntrepreneurs from "../app/assets/startupsAndEntrepreneurs.png";
import cashFlowManagement from "../app/assets/cashFlowManagement.png";
import businessExpansion from "../app/assets/businessExpansion.png";
import paymentSolutions from "../app/assets/paymentSolutions.png";
import ButtonGreen from "./ul/buttonGreen";
import ProductsCard from "./ul/productsCard";
import UseCases from "./ul/useCases";
import UseCases2 from "./ul/useCases2";
import FeaturesCards from "./ul/featuresCards";
import FrequentlyCard from "./ul/frequentlyCard";
import { useEffect, useState } from "react";
import MiniArrow from "./svg/miniArrow";
import TestimonialsCarousel from "./components/carusel";


const Plus = () => {
  return (
    <div className="absolute -top-12 -left-8 lg:left-16 xl:-left-16 flex p-[19px] gap-x-2 rounded-2xl bg-grey10 z-1000">
      <div className="flex items-center justify-center px-[16px] py-[13px] bg-green60 rounded-full">
        <PlusIcon />
      </div>
      <div className="flex flex-col text-[17px]">
        <p>+ $5000,00</p>
        <p className="text-[13px] font-light">Monthly Income</p>
      </div>
    </div>
  )
}

export default function Home() {

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
    <main className="flex mt-[50px] 2xl:mt-[108px] flex-col justify-between items-center">
      <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto flex flex-col xl:flex-row justify-between gap-x-[120px]">
        <div className="text-center lg:text-left mb-20 xl:mb-0 xl:w-2/5 2xl:w-1/3">
          <div className="flex mb-5 items-center gap-x-1.5 bg-grey15 px-3 py-2.5 rounded-full w-fit mx-auto lg:mx-0">
            <Llc />
            <p className="whitespace-nowrap">No LLC Required, No Credit Check.</p>
          </div>
          <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">
            Welcome to YourBank
            Empowering Your <span className="text-green60">Financial Journey</span>
          </h2>
          <p className="mb-[50px] text-sm font-light md:text-[18px]">
          At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses 
          to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
          </p>
          <ButtonGreen text="Open Account" />
        </div>
        <div className="relative flex justify-center xl:justify-end items-start ">
          <Plus />
          <Transaction name1="Joel Kenley" price1="$68.00" name2="Mark Smith" price2="$52.00" name3="Lenen Roy" price3="$99.00" />
          <img className="hidden sm:block -ml-[-180px] sm:-ml-[160px] xl:-ml-48 2xl:-ml-52 -z-20  w-[250px] 2xl:w-[300px]" src={arrow.src} alt="" />
        </div>
      </section>
      <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto">
        <div className="flex flex-col md:flex-row mb-[100px] gap-y-[50px] justify-between gap-x-[120px]">
          <div className="max-w-[910px]">
            <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">
              Our <span className="text-green60">Products</span>
            </h2>
            <p className="text-center text-sm font-light md:text-[18px] md:text-left">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
          </div>
          <div className="flex items-end">
            <div className="flex p-4 rounded-full border border-grey15 bg-grey11">
              <ButtonGreen text="For Individuals" />
              <ButtonGreen text="For Businesses" bg={false} />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-x-[30px]">
          <ProductsCard 
            img={checkAccount.src} 
            name="Checking Accounts" 
            description="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access." 
          />
          <ProductsCard 
            img={savingAccount.src} 
            name="Savings Accounts" 
            description="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
            border
          />
          <ProductsCard 
            img={loansAndMortgages.src} 
            name="Loans and Mortgages" 
            description="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
          />
        </div>
      </section>
      <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-wrap px-[30px] gap-x-[100px]">
        <div className="mb-[60px] w-full xl:w-[calc(50%-50px)]">
          <UseCases 
              img1={managingPersonalFinances.src} 
              title1="Managing Personal Finances" 
              img2={savingForTheFuture.src} 
              title2="Saving for the Future" 
              img3={homeownership.src} 
              title3="Homeownership" 
              img4={educationFunding.src} 
              title4="Education Funding" 
            />
        </div>
        <div className="mb-[60px] w-full xl:w-[calc(50%-50px)]">
          <UseCases2 
            title="For Individuals" 
            text="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support 
                  during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers" 
            percent1="78%" 
            percent2="63%" 
            percent3="91%" 
            info1="Secure Retirement Planning" 
            info2="Manageable Debt Consolidation" 
            info3="Reducing financial burdens" 
          />
        </div>
        <div className="w-full xl:w-[calc(50%-50px)]">
          <UseCases2 
            title="For Business" 
            text=" For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel 
                  business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them" 
            percent1="65%" 
            percent2="70%" 
            percent3="45%" 
            info1="Cash Flow Management" 
            info2="Drive Business Expansion" 
            info3="Streamline payroll processing" 
          />
        </div>
        <div className="w-full xl:w-[calc(50%-50px)]">
          <UseCases 
              img1={startupsAndEntrepreneurs.src} 
              title1="Startups and Entrepreneurs" 
              img2={cashFlowManagement.src} 
              title2="Cash Flow Management" 
              img3={businessExpansion.src} 
              title3="Business Expansion" 
              img4={paymentSolutions.src} 
              title4="Payment Solutions" 
              left = {false}
            />
        </div>
      </section>
      <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-col px-[30px]">
        <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">Our <span className="text-green60">Features</span></h2>
        <p className="mb-[80px] md:w-4/5 text-sm font-light md:text-[18px] text-center md:text-left">Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="relative">
            {/* Карусель с кнопками */}
            <div className="flex md:hidden overflow-x-auto pb-4 gap-x-3 scrollbar-hide">
              <button className="flex-shrink-0 px-6 py-4 bg-grey11 border border-grey15 rounded-full text-lg text-green60 font-light">
                Online Banking
              </button> 
              <button className="flex-shrink-0 px-6 py-4 bg-grey11 border border-grey15 rounded-full text-lg font-light">
                Financial Tools
              </button>
              <button className="flex-shrink-0 px-6 py-4 bg-grey11 border border-grey15 rounded-full text-lg font-light">
                Customer Support
              </button>
            </div>

            {/* Оригинальный вертикальный блок для десктопов */}
            <div className="hidden md:flex flex-col p-[50px] gap-y-6 bg-grey11 border border-grey15 rounded-2xl">
              <button className="px-6 py-4 bg-grey11 border border-grey15 rounded-full text-lg text-green60 font-light">
                Online Banking
              </button>
              <button className="px-6 py-4 bg-grey11 border border-grey15 rounded-full text-lg font-light">
                Financial Tools
              </button>
              <button className="px-6 py-4 bg-grey11 border border-grey15 rounded-full text-lg font-light">
                Customer Support
              </button>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row flex-wrap gap-[30px]">
            <FeaturesCards 
              title="24/7 Account Access"
              text="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
            />
            <FeaturesCards
              title="Mobile Banking App"
              text="Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."
            />
            <FeaturesCards
              title="Secure Transactions"
              text="Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."
            />
            <FeaturesCards
              title="Bill Pay and Transfers"
              text="Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."
            />
          </div>
        </div>
      </section>
      <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-col px-[30px]">
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
      </section>
      <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-col px-[30px]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col justify-center items-center md:items-start mb-[50px] md:mb-0">
            <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">Our <span className="text-green60">Testimonials</span></h2>
            <p className="w-4/5 text-sm font-light md:text-[18px]">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
          </div>
          <div className="flex mb-0 md:mb-[100px] justify-center md:justify-end items-end w-1/2">
            <div className="flex p-4 rounded-full border border-grey15 bg-grey11">
              <ButtonGreen text="For Individuals" />
              <ButtonGreen text="For Businesses" bg={false} />
            </div>
          </div>
        </div>
        <TestimonialsCarousel />
      </section>
      <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-col px-[30px]">
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
      </section>
    </main>
  );
}
