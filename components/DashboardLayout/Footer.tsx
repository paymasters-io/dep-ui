import type { NextPage } from "next";

const Footer: NextPage = () => {

  return (
   
    <div className="absolute w-[calc(100%_-_263px)] right-[0px] bottom-[-3px] left-[263px] box-border h-[72px] overflow-hidden text-gray-400 font-mono border border-t-gray-50 border-opacity-10">
        <div className="absolute top-[27px] left-[28px] flex flex-row items-start justify-start">
        <div className="relative text-inherit decoration-0 leading-[18px]">© 2023 Paymasters</div>
        </div>
        <div className="absolute top-[27px] right-[28px] flex flex-row items-start justify-end gap-[4px] text-sm text-black-40">
          <div className="rounded-lg flex flex-col py-1 px-2 items-start justify-center gap-[4px] text-xs text-gray-400">
          <a href="#" className="relative text-inherit decoration-0 leading-[18px]">About</a>
            <div className="self-stretch relative box-border h-0.5 shrink-0 hidden border-t-[2px] border-solid border-black-100-ddddd" />
          </div>
          <div className="rounded-lg flex flex-col py-1 px-2 items-start justify-center gap-[4px] text-xs text-gray-400">
            <a href="#" className="relative text-inherit decoration-0 leading-[18px]">Support</a>
            <div className="self-stretch relative box-border h-0.5 shrink-0 hidden border-t-[2px] border-solid border-black-100-ddddd" />
          </div>
          <div className="rounded-lg flex flex-col py-1 px-2 items-start justify-center gap-[4px] text-xs text-gray-400">
            <a href="#" className="relative text-inherit decoration-0 leading-[18px]">Contact Us</a>
            <div className="self-stretch relative box-border h-0.5 shrink-0 hidden border-t-[2px] border-solid border-black-100-ddddd" />
          </div>
        </div>
      </div>
  )
}


export default Footer