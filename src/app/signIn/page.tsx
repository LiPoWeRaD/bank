"use client"

import { useState } from "react"
import TestimonialsCarousel from "../components/carusel"
import Facebook2 from "../svg/facebook2"
import Google from "../svg/google"
import Ios from "../svg/ios"
import Union from "../svg/union"
import ButtonGreen from "../ul/buttonGreen"


const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="flex mt-[50px] 2xl:mt-[108px] flex-col justify-between items-center">
            <section className="relative z-10 container px-[150px] py-[100px] mb:-[50px] md:mb-[100px] 2xl:mb-[150px] mx-auto flex flex-col justify-center items-center gap-x-[120px] rounded-3xl bg-grey11">
                <div className={`absolute top-0 right-0 w-full h-full bg-[image:var(--bg-abstractDesign)] bg-no-repeat bg-[length:250px_250px] [transform:scaleX(-1)] z-0`}></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--bg-login)] saturate-0 opacity-10 rounded-3xl z-0"></div>
                <h2 className="z-10 mb-3.5 text-2xl md:text-5xl text-center md:text-left text-green60">
                    Sign Up
                </h2>
                <p className="z-10 mb-[50px] text-center md:text-left text-sm font-light md:text-[18px]">
                    Join our community today! Create an account to unlock exclusive features and personalized experiences.
                </p>
                <form className="flex flex-col gap-y-[40px] z-10 " action="">
                    <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:items-start gap-[30px]">
                        <input type="text" placeholder="Enter First Name" className="px-5 py-3 rounded-full w-full border border-grey35 bg-grey20 text-white md:w-[calc(50%-15px)]" />
                        <input type="text" placeholder="Enter Last Name" className="px-5 py-3 rounded-full w-full border border-grey35 bg-grey20 text-white md:w-[calc(50%-15px)]" />
                        <input type="text" placeholder="Enter your Email" className="px-5 py-3 rounded-full w-full border border-grey35 bg-grey20 text-white md:w-[calc(50%-15px)]" />
                        <div className="relative flex justify-between items-center   rounded-full border border-grey35 bg-grey20 text-white w-full md:w-[calc(50%-15px)]">
                            <input type={showPassword ? "text" : "password"} placeholder="Enter your Password" className="px-5 pr-12 py-3 w-full rounded-full"  />
                            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-5 cursor-pointer" type="button"><Union /></button>
                        </div>
                    </div>
                    <button type="submit" className="border-b-[2px] border-white text-[18px] font-light w-fit self-center cursor-pointer">Forgot Password?</button>
                    <div className="flex flex-col gap-[24px] justify-center">
                        <ButtonGreen text="Sign Up" className="w-full" />
                        <ButtonGreen href="/login" text="Login" bg={false} bgColor="bg-grey15" className="w-full text-center" />
                        <div className="flex gap-x-4 items-center">
                            <span className="w-full border-b-[2px] border-white"></span>
                            <span className="whitespace-nowrap">Or Continue with</span>
                            <span className="w-full border-b-[2px] border-white"></span>
                        </div>
                        <div className="flex justify-center">
                            <button><Google /></button>
                            <button><Facebook2 /></button>
                            <button><Ios /></button>
                        </div>
                    </div>
                </form>
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
        </main>
    )
}

export default SignIn