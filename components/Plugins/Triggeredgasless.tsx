
const Gasless = () => {

  return (
   
    <div className="flex mt-20">
    <form>
        <div className="flex w-3/4 flex-wrap gap-8">
        <div className="flex flex-col gap-4">
            <label>Min message value</label>  
        <input type="text"
defaultValue="0"
name="minmessagevalue"
className="bg-paymasters-dark 
focus:outline-0 focus:border-0 outline-none outline-white outline-0
rounded-md w-[222px] h-9 text-gray-400 border-[1px] border-solid border-lightgray"   />
        </div>
        <div className="flex flex-col gap-4">
        <label>Call data selector</label>
        <input type="text"
defaultValue="0"
name="Calldataselector"
className="bg-paymasters-dark 
focus:outline-0 focus:border-0 outline-none outline-white outline-0
rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
        </div>
        <div className="flex flex-col gap-4">
        <label>Strict destination</label>
        <input type="text"
defaultValue=""
name="Strictdestination"
className="bg-paymasters-dark 
focus:outline-0 focus:border-0 outline-none outline-white outline-0
rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
        </div>
        <div className="flex flex-col gap-4">
        <label>Call data params</label>
        <div>
        <input type="text"
defaultValue="0"
name="Calldataparams1"
className="bg-paymasters-dark mr-2
focus:outline-0 focus:border-0 outline-none outline-white outline-0
rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
<input type="text"
defaultValue="0"
name="Calldataparams2"
className="bg-paymasters-dark 
focus:outline-0 focus:border-0 outline-none outline-white outline-0
rounded-md w-[222px] h-9 text-gray-400  border-[1px] border-solid border-lightgray"   />
</div>

        </div>
        
        </div>
        <div className="  mt-8 ">
                    <button className="h-[37px] w-[147px] float-left font-medium bg-paymasters-purple-800 rounded-md text-white">
                        Save
                    </button>
                </div>
    </form>
</div> 
  )
}


export default Gasless