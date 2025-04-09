"use client"

import Email from "../svg/email"
import Logo_1 from "../svg/logo_1"
import Logo_1_1 from "../svg/logo_1_1"
import Phone from "../svg/phone"
import Location from "../svg/location"
import Logo from "../ul/logo"
import Facebook from "../svg/facebook"
import Twiter from "../svg/twiter"
import In from "../svg/in"
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-grey11 text-white pt-[100px] pb-4">
            <section className="container px-[30px] gap-y-[50px] py-5 mx-auto flex flex-col items-center">
                <Logo imgSvg1={<Logo_1 />} imgSvg2={<Logo_1_1 />} />
                <ul className="flex items-center">
                    <li className={`p-3 rounded-full`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`p-3 rounded-full`}>
                        <Link href="/careers">Careers</Link>
                    </li>
                    <li className={`p-3 rounded-full`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`p-3 rounded-full`}>
                        <Link href="/security">Security</Link>
                    </li>
                </ul>
                <div className="flex py-[50px] flex-wrap justify-center items-center gap-5 w-full border-y border-grey15">
                    <a href="mailto:hello@skillbirdge.com" className="flex items-center gap-x-2"><Email /><span>hello@skillbirdge.com</span></a>
                    <a href="tel:+91 91813 23 2309" className="flex items-center gap-x-2"><Phone /><span>+91 91813 23 2309</span></a>
                    <a href="#" className="flex items-center gap-x-2"><Location /><span>Somewhere in the World</span></a>
                </div>
                <div className="relative flex flex-col md:flex-row justify-between items-center w-full bg-grey20 rounded-2xl md:rounded-full p-[16px] pt-12 md:p-[16px]">
                    <ul className="flex absolute md:relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 -top-8 md:top-0 items-center gap-x-3.5">
                        <li className="p-3.5 rounded-full bg-green60">
                            <Link href="#"><Facebook /></Link>
                        </li>
                        <li className="p-3.5 rounded-full bg-green60">
                            <Link href="#"><Twiter /></Link>
                        </li>
                        <li className="p-3.5 rounded-full bg-green60">
                            <Link href="#"><In /></Link>
                        </li>
                    </ul>
                    <p className="text-lg font-light mb-5 md:mb-0">YourBank All Rights Reserved</p>
                    <ul className="flex">
                        <li className="pr-3 border-r border-white">
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li className="pl-3">
                            <Link href="#">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer