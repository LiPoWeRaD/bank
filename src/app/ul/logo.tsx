import { FC } from "react"

interface Props {
    imgSvg1: React.ReactNode
    imgSvg2: React.ReactNode
}

const Logo:FC<Props> = ({ imgSvg1, imgSvg2 }) => {
    return (
        <div className="flex items-center">
            <div className="mr-2">{imgSvg1}</div>
            <div className="mr-2">{imgSvg2}</div>
        </div>
    )
}

export default Logo