import Link from "next/link"


interface ButtonGreenProps {
    text: string
    bg?: boolean
    className?: string
    href?: string
    bgColor?: string
}

const ButtonGreen = ({ text, bg = true, bgColor, className, href }: ButtonGreenProps) => {
    return href === undefined ? (
        <button className={"px-[30px] py-3.5 rounded-[84px] cursor-pointer " + (bg ? "bg-green60 text-grey11" : bgColor ? bgColor : "bg-transparent") + " " + className}>{text}</button>
    ) : (
        <Link href={href} className={"px-[30px] py-3.5 rounded-[84px] cursor-pointer " + (bg ? "bg-green60 text-grey11" : bgColor ? bgColor : "bg-transparent") + " " + className}>{text}</Link>
    )
} 

export default ButtonGreen