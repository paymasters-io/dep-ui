import Layout from "../DashboardLayout";

const AccessContol = () => {
 
  return (
 <Layout>
          <div className="absolute top-[1369px] left-[1263px]  flex flex-row items-center justify-center">
      <button className="h-[37px] w-[147px] font-medium bg-paymasters-purple-800 rounded-md text-white">
        Save
        </button>
      </div>
      <hr
        className="absolute top-[460.5px] opacity-10 left-[263px] w-full h-px"
      />
       <hr
      className="absolute top-[207.5px] opacity-10 left-[263px] w-full h-px"
      />
       <hr
        className="absolute top-[758.5px] opacity-10 left-[263px]  w-full h-px"
      />
       <hr
        className="absolute top-[1056.5px] opacity-10 left-[263px] w-full h-px"
      />
      <div className="absolute top-[163px] left-[308px] text-[18px] font-semibold font-regular text-white">
        Access Control
      </div>
      <div className="absolute top-[320px] left-[308px] text-sm leading-[140%] text-gray-500">
        plugin that enables gas offset when the transaction meets a certain
        criteria
      </div>
      <div className="absolute top-[579px] left-[308px] text-sm leading-[140%] text-gray-500">

        plugin that enables gas offset when the transaction meets a certain
        criteria
      </div>
      <div className="absolute top-[868px] left-[308px] text-sm leading-[140%] text-gray-500">
        plugin that enables gas offset when the transaction meets a certain
        criteria
      </div>
      <div className="absolute top-[1165px] left-[308px] text-sm leading-[140%] text-gray-500">
        plugin that enables gas offset when the transaction meets a certain
        criteria
      </div>
      <div className="absolute  top-[281px] left-[308px] text-[19.46px] capitalize font-semibold text-center">
        Max nonce
      </div>
      <div className="absolute tex  top-[540px] left-[308px] text-[19.46px] capitalize font-semibold text-center">
        NFT Gate Contract
      </div>
      
      <div className="absolute  top-[829px] left-[308px] text-[19.46px] capitalize font-semibold text-center">
        Validation Address
      </div>
      
      <div className="absolute   top-[1126px] left-[308px] text-[19.46px] capitalize font-semibold text-center">
        ERC20 gate
      </div>
      <div className="absolute top-[374px] left-[308px] ">
        <input type="text"
         defaultValue="0"
         name="Nonce"
          className="bg-paymasters-dark 
        
        focus:outline-0 focus:border-0 outline-none outline-white outline-0
         rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
      </div>
      <div className="absolute top-[633px] left-[308px] ">
      <input type="text"
         defaultValue=""
         name="NFT"
          className="bg-paymasters-dark      
        focus:outline-0 focus:border-0 outline-none outline-white outline-0
         rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
      </div>
      <div className="absolute top-[922px] left-[308px] ">
      <input type="text"
         defaultValue=""
         name="validation"
          className="bg-paymasters-dark 
        focus:outline-0 focus:border-0 outline-none outline-white outline-0
         rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
      </div>
      <div className="absolute top-[1219px] left-[308px] ">
      <input type="text"
         defaultValue=""
         name="erc20gate1"
          className="bg-paymasters-dark 
        focus:outline-0 focus:border-0 outline-none outline-white outline-0
         rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
      </div>
      <div className="absolute top-[1219px] left-[555px] ">
      <input type="text"
         defaultValue=""
         name="erc20gate2"
          className="bg-paymasters-dark 
        focus:outline-0 focus:border-0 outline-none outline-white outline-0
         rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
      </div>
      <div className="absolute top-[156px] left-[1263px] flex flex-row items-center justify-center">
    
        <button className="h-[37px] w-[147px] font-medium bg-paymasters-purple-800 rounded-md text-white">
        Save
        </button>
      </div>

</Layout>
  );
};

export default AccessContol;
