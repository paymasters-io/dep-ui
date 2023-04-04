import type { NextPage } from "next";
import Image from "next/image";
import zetaIMG from "../../assets/icons/zeta.png";

import logoIMG from "../../assets/img/paymaster-logo.svg";
import searchIMG from "../../assets/icons/search.png";

const TopNav: NextPage = () => {

  return (
    <div className="">
     <div className=" top-[0px] left-[0px]  box-border border-0 w-full h-[78px] border-b border-b-gray-50 border-opacity-10" />
      <div className="absolute top-[26px] left-[29px] w-[117.9px] h-[26.52px] text-[14.82px] text-gray-300">
             
          <div className="absolute  left-[0px] ">
      <Image 
       src={logoIMG} 
       width={18} height={18}
        alt="paymaster logo"
         />
        
          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[51.89px] rounded-br-[51.89px] rounded-bl-none bg-darkviolet w-[19.02px] h-[20.09px]" />
        </div>
        <b className="absolute top-[3.14px] left-[26.9px]">Paymasters</b>
      </div>
     
      <div className="absolute top-[22px] left-[397px] w-[645px] h-[35px] ">
        <div>
      <input type="text"
         defaultValue=""
         name="search"
         placeholder="search"
          className="bg-black pl-8
         rounded-md w-full text-gray-400"   />
      </div>
        <div className="absolute top-4 left-[14px] flex flex-row items-center justify-start gap-[13px]">
        <Image 
       src={searchIMG} 
       width={12} height={12}
        alt="search icon"
         />
        </div>
      </div>
      <div className="absolute top-[28px] pl-6 left-[1236px] flex flex-row items-center justify-start gap-[8px] text-sm">
      
         <div className="arelative w-[25px] h-6 shrink-0 object-cover">
       <Image 
       src={zetaIMG} width={28} height={30} 
       alt="paymaster zeta"
        />
       </div>
        <div className="relative font-semibold">Zetachain</div>
      </div>
    </div>

  )
}


export default TopNav