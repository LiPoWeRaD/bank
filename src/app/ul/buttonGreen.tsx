import Link from "next/link"


interface ButtonGreenProps {
    text: string
    bg?: boolean
    className?: string
    href?: string
    bgColor?: string
    onClick?: () => void
}

const ButtonGreen = ({ text, bg = true, bgColor, className, href, onClick }: ButtonGreenProps) => {
    return href === undefined ? (
        <button onClick={onClick} className={"px-[30px] py-3.5 rounded-[84px] cursor-pointer " + (bg ? "bg-green60 text-grey11" : bgColor ? bgColor : "bg-transparent") + " " + className}>{text}</button>
    ) : (
        <Link href={href} className={"px-[30px] py-3.5 rounded-[84px] cursor-pointer " + (bg ? "bg-green60 text-grey11" : bgColor ? bgColor : "bg-transparent") + " " + className}>{text}</Link>
    )
} 

export default ButtonGreen