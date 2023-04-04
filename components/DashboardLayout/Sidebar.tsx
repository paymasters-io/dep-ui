import type { NextPage } from "next";
import Image from "next/image";

import homeIMG from "../../assets/icons/home.svg";
import receiptIMG from "../../assets/icons/receipt_long.svg";
import extensionIMG from "../../assets/icons/extension.png";
import accountIMG from "../../assets/icons/account_balance_wallet.svg";
import toggleIMG from "../../assets/icons/toggle_off.svg";
import logoutIMG from "../../assets/icons/logout.png";

import { useRouter } from 'next/router'

const Sidebar: NextPage = () => {
    const router = useRouter();

  return (
    <div className="fixed top-[0px] left-[0px] box-border w-[263px] h-[1550px] overflow-hidden text-sm text-lightslategray-100 border-r  border-r-gray-50 border-opacity-10">
    <div className="absolute top-[121px] left-[30px] flex flex-col items-start justify-start gap-[7px]">
      <div className="rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs  h-[47px] shrink-0 flex flex-row py-0 pr-0 pl-[23.801652908325195px] box-border items-center justify-start gap-[18.25px]">
       
        <div className="relative w-6 h-6 shrink-0">
        <Image src={homeIMG} width={24} height={24} alt="home img" />   
        </div>
        <div className={` relative `}>
            <a className={`${router.pathname === "/home" ? "font-semibold text-white" : "font-medium text-inherit"} decoration-0 no-underline` }
             href="/home">Home</a></div>
      </div>
      <div className="rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs  h-[47px] shrink-0 flex flex-row py-0 pr-0 pl-[23.801652908325195px] box-border items-center justify-start gap-[18.25px]">
      <div className="relative w-6 h-6 shrink-0">
        <Image src={receiptIMG} width={24} height={24} alt="receipt img" />   
        </div>
        <div className={` relative `}>
        <a className={`${router.pathname === "/transactions" ? "font-semibold text-white" : "font-medium text-inherit"}  decoration-0 no-underline` }
         href="/transactions">Transactions</a></div>
      </div>
      <div className="rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs w-[234px] h-[47px] shrink-0 flex flex-row py-0 pr-0 pl-[23.801652908325195px] box-border items-center justify-start gap-[18.25px]">
      <div className="relative w-6 h-6 shrink-0">
        <Image src={extensionIMG} width={24} height={24} alt="receipt img" />   
        </div>
        <div className={` relative `}>
        <a className={`${router.pathname === "/plugin" ? "font-semibold text-white" : "font-medium text-inherit"}  decoration-0 no-underline` } 
        href="/plugin">Plugins</a></div>
      </div>
      <div className="rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs w-[234px] h-12 shrink-0 flex flex-row py-0 pr-0 pl-[23.801652908325195px] box-border items-center justify-start gap-[18.25px]">
      <div className="relative w-6 h-6 shrink-0">
        <Image src={accountIMG} width={24} height={24} alt="receipt img" />   
        </div>
    
        <div className={` relative `}>
        <a className={`${router.pathname === "/wallet" ? "font-semibold text-white" : "font-medium text-inherit"}  decoration-0 no-underline` } 
        href="/wallet">Wallet</a>
        </div>
      </div>
      <div className="rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs w-[234px] h-12 shrink-0 flex flex-row py-0 pr-0 pl-[23.801652908325195px] box-border items-center justify-start gap-[18.25px]">
      <div className="relative  shrink-0 ">
            <Image 
            src={toggleIMG} 
            width={24} height={24}
                alt="toggle"
                />
                </div>
        <div className={` relative `}>
        <a className={`${router.pathname === "/access-control" ? "font-semibold text-white" : "font-medium text-inherit"}  decoration-0 no-underline` }
         href="/access-control">Access control</a></div>
      </div>
    </div>
    <div className="absolute top-[596px] left-[30px] rounded-[31.74px] w-48 h-[47.6px] flex flex-row py-0 pr-0 pl-[23.801652908325195px] box-border items-center justify-start gap-[18.25px] text-[12.69px] font-regular">
      <div className="relative shrink-0">
        <Image 
            src={logoutIMG} 
            width={24} height={24}
                alt="toggle"
                />
                </div>
      <div className="relative">
      <button className=" text-inherit decoration-0 no-underline">Log out</button></div>
    </div>
    <div className="absolute top-[83px] left-[221px] rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
   
    </div>
  </div>
  )
}


export default Sidebar