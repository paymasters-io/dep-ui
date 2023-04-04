import Layout from "../DashboardLayout";
import toggleIMG from "../../assets/icons/toggle_off.svg";
import onToggleIMG from "../../assets/icons/onswitch.png";
import Image from "next/image";
import { useState } from "react";
import TriggeredGasless from "./Triggeredgasless"
import DynamicFeeQuotes from "./DynamicFeeQuotes"
import Rebates from "./Rebates";
import GasDelegation from "./GasDelegation";

const Plugins = () => {
  
    const [toggleSwitch1 , setToggleSwitch1] = useState(false)
    const [toggleSwitch2 , setToggleSwitch2] = useState(false)
    const [toggleSwitch3 , setToggleSwitch3] = useState(false)
    const [toggleSwitch4 , setToggleSwitch4] = useState(false)
   
  return (
 <Layout>
    <h1 className="absolute p-2 top-[110px] left-[308px] text-[18px] font-semibold font-mono text-white"> Plugins</h1>
      <div className="absolute  top-[163px] flex gap-8  left-[308px] text-[18px] font-semibold font-mono text-white">
        <div className="w-[419px]  p-4 h-[107px] flex-col bg-[#D9D9D93D] rounded-[10px] text-white">
           <h2 className=" font-normal  text-[18px]">Plugins</h2>
           <div className=" font-normal mt-6 text-[22px]">721k</div>
        </div>
        <div className="w-[419px] p-4 h-[107px] flex-col bg-[#D9D9D93D] rounded-[10px] text-white">
        <h2 className=" font-normal text-[18px]">Total fees</h2>
           <div className=" font-normal mt-6 text-[22px]">239k</div>
        </div>
      </div>
      <div className="absolute right-[308px] top-[320px] left-[308px] flex flex-col justify-evenly gap-8 ">
      <div className=" min-h-[159px] flex-col p-4 gap-4 bg-[#010A1D] rounded-[10px] text-slate-200">
        <div className="flex gap-4">
        <h2 className=" text-[19.46px] text-medium font-semibold">Triggered Gasless </h2>
        <span onClick={() => {
            setToggleSwitch1(!toggleSwitch1)
        }} className=""> 
         
        { 
          toggleSwitch1 ?
          <Image 
            src={onToggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
                :
                <Image 
            src={toggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
        }

            </span>
            </div>
           <p className=" font-normal mt-4 text-sm text-gray-500">plugin that enables gas offset
            when the transaction meets a certain criteria</p>
            {
            toggleSwitch1 ?
            <TriggeredGasless />
            : ""
        }
        </div>
        <div className=" min-h-[159px] flex-col p-4 gap-4 bg-[#010A1D] rounded-[10px] text-slate-200">
        <div className="flex gap-4">
        <h2 className=" text-[19.46px] text-medium font-semibold">Dynamic fee quotes </h2>
        <span onClick={() => {
            setToggleSwitch2(!toggleSwitch2)
        }} className=""> 
         
        { 
          toggleSwitch2 ?
          <Image 
            src={onToggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
                :
                <Image 
            src={toggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
        }
            </span>
            </div>
           <p className=" font-normal mt-4 text-sm text-gray-500">plugin that enables gas offset
            when the transaction meets a certain criteria</p>
            {
            toggleSwitch2 ?
            <DynamicFeeQuotes />
            : ""
        }
        </div>
      
        <div className=" min-h-[159px] flex-col p-4 gap-4 bg-[#010A1D] rounded-[10px] text-slate-200">
        <div className="flex gap-4">
        <h2 className=" text-[19.46px] text-medium font-semibold">On Chain Rebates </h2>
        <span onClick={() => {
            setToggleSwitch3(!toggleSwitch3)
        }} className=""> 
         
        { 
          toggleSwitch3 ?
          <Image 
            src={onToggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
                :
                <Image 
            src={toggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
        }
            </span>
            </div>
           <p className=" font-normal mt-4 text-sm text-gray-500">plugin that enables gas offset
            when the transaction meets a certain criteria</p>

            {
            toggleSwitch3 ?
           <Rebates />
            : ""
        }
        </div>
        <div className="min-h-[159px] flex-col p-4 gap-4 bg-[#010A1D] rounded-[10px] text-slate-300">
        <div className="flex gap-4">
        <h2 className=" text-[19.46px] text-medium font-semibold">Gas Delegation</h2>
        <span onClick={() => {
            setToggleSwitch4(!toggleSwitch4)
        }} className=""> 
         
        { 
          toggleSwitch4 ?
          <Image 
            src={onToggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
                :
                <Image 
            src={toggleIMG} 
            width={32} height={32}
                alt="gasless"
                />
        }
            </span>
            </div>
           <p className=" font-normal mt-4 text-sm text-gray-500">plugin that enables gas offset
            when the transaction meets a certain criteria</p>

            {
            toggleSwitch4 ?
           <GasDelegation />
            : ""
        }
        </div>
      </div>
</Layout>
  );
};

export default Plugins;
