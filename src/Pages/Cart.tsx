

import { Link } from "react-router-dom"




export default function Cart (){
    return (
        <div className="lg:m-12 m-6  h-[100%]">
            <div className="flex flex-col  lg:pl-[100px] pl-[50px]">
            <h1 className="text-[35px] font-bold ">My Cart </h1>
            <p className="py-4 text-[22px] text-gray-400">3 items</p>
            </div>
            <div className=" flex flex-col lg:gap-x-4 gap-x-2   ">

            <div className="lg:flex lg:justify-between lg:items-center flex items-center justify-around  lg:p-6 p-2 border-b-2 border-gray-300 pb-4">
                <div className="lg:flex  gap-4 ">
                    <p className="w-[150px] h-[120px]"> <img src="/images/Rectangle 211 (2).png" alt="picture" /></p>     
                
                <div className="flex flex-col  ">
                    <h1 className="lg:text-[25px] text-[16px] font-bold">Supreme Hoodie</h1>
                    <p className="lg:text-[18px] text-[16px] font-bold">Category: <span className="text-gray-400">Hoodie</span></p>
                    <p className="text-gray-400 lg:text-[18px] text-[16px]">QTY:1</p>
                </div>
                </div>

                <div className="flex flex-col">
                    <p className="lg:text-[25px] text-[16px] font-bold flex justify-center items-center">50,000</p>
                    <button className="lg:p-4 p-2 text-white bg-black flex justify-center items-center lg:w-[200px] w-[100px]">Remove</button>

                </div>

            </div>

            <div className="lg:flex lg:justify-between lg:items-center flex items-center justify-around lg:p-6 p-2 border-b-2 border-gray-300 pb-4">
                <div className="lg:flex gap-4">
                    <p className="w-[150px] h-[120px]"> <img src="/images/Rectangle 211.png" alt="picture" /></p>     
                
                <div className="flex flex-col ">
                    <h1 className="lg:text-[25px] text-[16px] font-bold">Dark Red Hoodie</h1>
                    <p className="lg:text-[18px] text-[16px] font-bold">Category: <span className="text-gray-400">Hoodie</span></p>
                    <p className="text-gray-400 lg:text-[18px] text-[16px]">QTY:1</p>
                </div>
                </div>

                <div className="flex flex-col ">
                    <p className="lg:text-[25px] text-[16px] font-bold flex justify-center items-center">45,000</p>
                    <button className="lg:p-4 p-2 text-white bg-black flex justify-center items-center lg:w-[200px] w-[100px]">Remove</button>

                </div>

            </div>

            <div className="lg:flex lg:justify-between lg:items-center flex items-center justify-around  lg:p-6 p-2 border-b-2 border-gray-300 pb-4">
                <div className="lg:flex  gap-4">
                    <p className="w-[150px] h-[120px]"> <img src="/images/Rectangle 211 (1).png" alt="picture" /></p>     
                
                <div className="flex flex-col ">
                    <h1 className="lg:text-[25px] text-[16px] font-bold">Yellow Hoodie</h1>
                    <p className="lg:text-[18px] text-[16px] font-bold">Category: <span className="text-gray-400">Hoodie</span></p>
                    <p className="text-gray-400 lg:text-[18px] text-[16px]">QTY:1</p>
                </div>
                </div>

                <div className="flex flex-col">
                    <p className="lg:text-[25px] text-[16px] font-bold flex items-center justify-center">60,000</p>
                    <button className="lg:p-4 p-2 text-white bg-black flex justify-center items-center lg:w-[200px] w-[100px]">Remove</button>

                </div>
                </div>
            </div>


            <div className="p-8">
                <p className="text-[35px] font-bold  pl-[50px]">Cart Totals</p>
                <div className="lg:p-8 p-4 flex flex-col justify-between  lg:gap-4 gap-2 font-bold lg:text-[25px] text-[16px]">

                <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4">
                <p>Subtotal</p>
                <p>50,000 NGN</p>
                </div>

                <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4">
                <p>Shipping Cost</p>
                <p>5,000 NGN</p>
                </div>

                <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4">
                <p>Tax</p>
                <p>700 NGN</p>
                </div>

                <div className="flex justify-between items-center">
                <p>Total</p>
                <p>158,700 NGN</p>
                </div>

              </div>  

            </div>

            <div className=" pt-[90px] pb-[300px]  flex justify-around items-center">
            <Link to="/Checkout"> 
          <button className="bg-black text-white lg:p-[10px] p-[5px] lg:text-[24px] text-[16px] lg:w-[426px] lg:h-[68px] w-[200px]  h-[68px] border rounded-lg flex justify-around items-center">
           Continue
          </button>
          </Link>

         </div>

        </div>




    )
}