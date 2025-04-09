import Link from "next/link"


const NotFound = () => {
    return (
        <main className="flex mt-[50px] 2xl:mt-[108px] flex-col justify-between items-center">
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto flex flex-col xl:flex-row justify-between gap-y-[50px]">
                <h1 className="text-2xl md:text-5xl text-center">Not Found Page</h1>
                <Link href="/" className="px-[30px] py-3.5 rounded-[84px] cursor-pointer bg-green60 text-grey11 w-fit self-center">Back to Home</Link>
            </section>
        </main>
    )
}

export default NotFound