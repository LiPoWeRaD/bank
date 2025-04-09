"use client"

import { usePathname } from "next/navigation"
import Logo_1 from "../svg/logo_1"
import Logo_1_1 from "../svg/logo_1_1"
import Logo from "../ul/logo"
import ButtonGreen from "../ul/buttonGreen"
import { useState } from "react"
import Menu from "../svg/menu"


const Header = () => {

    const path = usePathname()
    
    const [open, setOpen] = useState(false)

    return (
        <header className={`py-[50px] bg-no-repeat ${path === "/" && "bg-[image:var(--bg-image)]"}`}>
            <section className="container px-[30px] py-5 mx-auto justify-between items-center rounded-full border border-grey15 bg-grey11 hidden lg:flex">
                <Logo imgSvg1={<Logo_1 />} imgSvg2={<Logo_1_1 />} />
                <ul className="flex items-center">
                    <li className={`p-3 rounded-full ${path === "/" ? "bg-grey15" : ""}`}>
                        <a href="/">Home</a>
                    </li>
                    <li className={`p-3 rounded-full ${path === "/careers" ? "bg-grey15" : ""}`}>
                        <a href="/careers">Careers</a>
                    </li>
                    <li className={`p-3 rounded-full ${path === "/about" ? "bg-grey15" : ""}`}>
                        <a href="/about">About</a>
                    </li>
                    <li className={`p-3 rounded-full ${path === "/security" ? "bg-grey15" : ""}`}>
                        <a href="/security">Security</a>
                    </li>
                </ul>
                <ul className="flex items-center gap-[30px]">
                    <li>
                        <a  href="/signIn">Sign in</a>    
                    </li> 
                    <ButtonGreen text="Login" href="/login" />
                </ul>
            </section>
            {/* Бургер меню */}
                <section className="container px-[30px] py-5 mx-auto flex justify-between items-center rounded-full border border-grey15 bg-grey11 lg:hidden relative">
                    <Logo imgSvg1={<Logo_1 />} imgSvg2={<Logo_1_1 />} />
                    
                    {/* Бургер-кнопка */}
                    <button className="z-50 px-[18px] py-[13px] bg-green60 rounded-full cursor-pointer" onClick={() => setOpen(!open)}><Menu /></button>
                    
                    {/* Выпадающее меню */}
                    {open && (
                        <div className="absolute top-full right-0 mt-2 w-[200px] bg-grey11 rounded-2xl border border-grey15 shadow-lg z-[999]">
                            <ul className="flex flex-col items-start p-4 gap-y-2">
                                <li className={`w-full p-3 rounded-full ${path === "/" ? "bg-grey15" : ""}`}>
                                    <a href="/" className="block w-full">Home</a>
                                </li>
                                <li className={`w-full p-3 rounded-full ${path === "/careers" ? "bg-grey15" : ""}`}>
                                    <a href="/careers" className="block w-full">Careers</a>
                                </li>
                                <li className={`w-full p-3 rounded-full ${path === "/about" ? "bg-grey15" : ""}`}>
                                    <a href="/about" className="block w-full">About</a>
                                </li>
                                <li className={`w-full p-3 rounded-full ${path === "/security" ? "bg-grey15" : ""}`}>
                                    <a href="/security" className="block w-full">Security</a>
                                </li>
                            </ul>
                            <div className="flex flex-col p-4 gap-3 border-t border-grey15">
                                <button className="w-full text-left p-2 cursor-pointer">Sign in</button> 
                                <ButtonGreen text="Login" className="w-full" />
                            </div>
                        </div>
                    )}
                </section>
            </header>
    )
}

export default Header