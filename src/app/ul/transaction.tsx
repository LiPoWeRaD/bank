import { FC } from "react"
import Arrowlr from "../svg/arrowlr"
import inr from "../assets/inr.png"
import usd from "../assets/usd.png"
import Dollar from "../svg/dollar"
import Euro from "../svg/euro"
import Bitcoin from "../svg/bitcoin"
import Titcoin from "../svg/titcoin"

interface Props {
    name1: string
    price1: string
    name2: string
    price2: string
    name3: string
    price3: string
}

interface CardProps {
    name: string;
    price: string;
  }

  const Card: FC<CardProps> = ({ name, price }) => {
    return (
        <div className="flex px-[21px] py-[14px] justify-between rounded-[12px] bg-grey11">
            <div className="flex items-center gap-x-[9px]">
                <div className="p-2.5 bg-green60 rounded-full">
                    <Arrowlr />
                </div>
                <div>
                    <p>Transaction</p>
                    <p>{name}</p>
                </div>
            </div>
            <p className="flex items-end">-{price}</p>
        </div>
    )
}

const Transaction:FC<Props> = ({name1, price1, name2, price2, name3, price3}) => {

    return (
        <div className="flex flex-col items-center sm:items-start">
            <div className="relative mb-[18px] p-[35px] flex flex-col w-[300px] sm:w-[515px] rounded-2xl bg-grey20"> 
                <div className="absolute inset-0 bg-[image:var(--bg-price)] bg-[length:50%_auto] bg-right-top rounded-2xl opacity-60"></div>
                <p className="mb-[17px] text-[18px]">Your Transactions</p>
                <div className="z-300"> 
                    <Card name={name1} price={price1} />
                </div>
                <div className="mx-[18px] -mt-[18px] opacity-50 z-200">
                    <Card name={name2} price={price2} />
                </div>
                <div className="mx-[36px] -mt-[24px] mb-[26px] opacity-20">
                    <Card name={name3} price={price3} />
                </div>
                <p className="mb-[17px] text-[18px]">Money Exchange</p>
                <table className="mb-[25px] bg-grey11 z-50">
                    <tbody className="flex flex-col">
                        <tr className="flex w-full">
                            <th className="flex p-[18px] flex-col items-start gap-y-[9px] rounded-tl-2xl border-[1px] border-r-0 border-grey15 w-full h-[100px]">
                                <div className="flex items-center gap-x-[9px]">
                                    <img src={inr.src} alt="" />
                                    <span>INR</span>
                                </div>
                                <p className="text-left text-[14px] font-light">Indian Rupees</p>
                            </th>
                            <th className="flex p-[18px] flex-col justify-start items-start gap-y-[9px] rounded-tr-2xl border-[1px] border-grey15 w-full h-[100px]">
                                <div className="flex items-center gap-x-[9px]">
                                    <img src={usd.src} alt="" />
                                    <span>USD</span>
                                </div>
                                <p className="text-left text-[14px] font-light">United States Dollar</p>
                            </th>
                        </tr>
                        <tr className="flex text-[18px] font-medium w-full">
                            <td className="flex items-center pl-[18px] rounded-bl-2xl border-[1px] border-t-0 border-r-0 border-grey15 w-full h-[100px]">5,0000</td>
                            <td className="flex items-center pl-[18px] rounded-br-2xl border-[1px] border-t-0 border-grey15 w-full h-[100px]">12.00</td>
                        </tr>
                    </tbody>
                </table>
                <button className="py-[14px] px-[21px] text-[16px] rounded-[71px] bg-grey10 text-green65 cursor-pointer z-100">Exchange</button>
            </div>
            <div className="flex sm:-mr-[32px] md:-mr-[52px] justify-center sm:justify-end">
                <div className="flex pl-5 py-2.5 pr-[9px] items-center gap-x-[11px] bg-grey10 rounded-full w-fit">
                    <p className="text-[16px]">Supported Currency</p>
                    <ul className="flex p-[9px] gap-x-[7px] bg-grey20 rounded-full">
                        <li><button className="px-3 py-2 rounded-full bg-grey15 cursor-pointer"><Dollar /></button></li>
                        <li><button className="px-3 py-2 rounded-full bg-grey15 cursor-pointer"><Euro /></button></li>
                        <li><button className="px-3 py-2 rounded-full bg-grey15 cursor-pointer"><Bitcoin /></button></li>
                        <li><button className="px-3 py-2 rounded-full bg-grey15 cursor-pointer"><Titcoin /></button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Transaction