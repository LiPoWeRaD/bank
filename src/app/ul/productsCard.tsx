

interface CardProps {
    img: string
    name: string
    description: string
    border?: boolean
}

const ProductsCard = ({ img, name, description, border = false }: CardProps) => {
    return (
        <div className={`flex py-[50px] xl:py-0 xl:px-[50px] flex-col justify-center items-center gap-2 ${border ? 'border-y-2 xl:border-y-0 xl:border-x-2 border-grey15' : ''}`}>
            <img className="mb-[30px]" src={img} alt={name} />
            <h3 className="text-center text-[24px]">{name}</h3> 
            <p className="text-[18px] font-light text-center">{description}</p>
        </div>
    )
}

export default ProductsCard