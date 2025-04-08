

interface ButtonGreenProps {
    text: string
    bg?: boolean
    className?: string
}

const ButtonGreen = ({ text, bg = true, className }: ButtonGreenProps) => {
    return (
        <button className={"px-[30px] py-3.5 rounded-[84px] cursor-pointer " + (bg ? "bg-green60 text-grey11" : "bg-transparent") + " " + className}>{text}</button>
    )
} 

export default ButtonGreen