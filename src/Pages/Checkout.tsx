









export default function Checkout (){

    
    return (
        <div className=" lg:m-12 m-6 h-[100%] ">
            <div className="flex flex-col  flex justify-around items-start  ">
            <h1 className="lg:text-[35px] text-[18px] font-bold ">Checkout </h1>
            <p className="py-4 text-[22px] font-bold "> Billing Info</p>
            </div>

            <form className="  flex-col flex  lg:my-8  lg:gap-y-12 gap-y-6">
               <p className="flex flex-col "> <label className="font-bold">Country</label>
               <input type="text" placeholder="Enter country" className="w-full h-[38px] lg:px-[11px] px-[3px] lg:py-[8px] py-[2px] flex items-center text-white  text-[16px] bg-sky-200"   />
               </p>
                <div className="flex justify-around items-center lg:grid lg:grid-cols-2 grid grid-cols-1">
              <p >
                 <label className="font-bold">First Name</label>
                <input type="text" placeholder="first Name"  className="w-1/2  h-[38px] px-[11px] py-[8px] flex items-center text-white  text-16px bg-sky-200"/>
                </p> 
                <p className="">
                 <label className="font-bold">Last Name</label>
                <input type="text" placeholder="Last Name"  className=" w-1/2 h-[38px] px-[11px] py-[8px] flex items-center text-white  text-16px bg-sky-200" />
                </p>

                </div>
                <p className="flex flex-col">
                    <label className="font-bold">Company Name</label>
                    <input type="text" placeholder="Enter company" className=" w-full h-[38px] px-[11px] py-[8px] flex items-center text-white  text-16px bg-sky-200" /></p>

                <div className="flex justify-around items-center lg:grid lg:grid-cols-2 grid grid-cols-1">
                    <p>
                        <label className="font-bold">Address</label>
                <input type="text" placeholder="Enter Address"  className=" w-1/2 h-[38px] px-[11px] py-[8px] flex items-center text-white  text-16px bg-sky-200"  />
                </p>

                <p>
                        <label className="font-bold">Phone</label>
                <input type="text" placeholder="Enter Phone Number"  className=" w-1/2 h-[38px] px-[11px] py-[8px] flex items-center text-white  text-16px bg-sky-200"  />
                </p>

                </div>

                <div className="pt-12 flex flex-col ">
                    <p className="font-bold text-[35px] "> Payment Methods </p>
                    <div className="flex flex-col gap-4 pt-8">
                    <label className="font-bold flex">
                        <input type="radio" checked /> <p className="pl-2">Bank Transfer</p>
                        </label>

                        <label className="font-bold gap-2 flex">
                        <input type="radio"   /> <p className="pl-2">Paypal</p> 
                        </label>

                        <label className="font-bold gap-2 flex" >
                        <input type="radio"   /><p className="pl-2">Payoneer</p>
                        </label>
                        </div>

                        <div className=" pt-[90px] pb-[300px]  flex justify-around items-center">
            
          <button className="bg-black text-white lg:p-[10px] p-[5px] lg:text-[24px] text-[16px] lg:w-[426px] lg:h-[68px] w-[200px]  h-[68px] border rounded-lg flex justify-around items-center">
           Place Order
          </button>
          </div>

                </div>




            </form>
             
        </div>
    )
}