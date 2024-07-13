import Shoppie from "/images/Shoppie.png"
import Bell from "/images/Bell.png"
import GearSix from "/images/GearSix.png"
import Profileimg from "/images/Rectangle 201.png"
import Icon from "/images/Frame 422.png"
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom"
import { useCart } from '../Context/cartContext';
import { FaShoppingCart } from "react-icons/fa"


export default function Navbar () {

    const { cart } = useCart();
    const itemCount = cart.reduce((sum:any, item:any) => sum + item.quantity, 0);
    return (
        <div>
        <div className='hidden lg: block w-full lg:h-[117px] h-[300px] bg-blue-600 lg:flex  lg:items-center sticky border rounded-b-lg '>
            <p className="lg:px-[30px] px-0 flex justify-center items-center"><img src={Shoppie} alt="logo" /></p>
            <ul className="w-full lg:flex lg:justify-around items-center text-[16px] font-semibold text-gray-400">
               
            <Link to="/">   <li className="text-white">Home</li> </Link>
                <li>Products</li>
                <li>About us</li>
                

                
                <div className="flex items-center bg-white "> 
                <span className="p-2 text-gray-200"><button type="button"   >
                <BiSearch />
                </button></span>
                    <input type="text" placeholder=" search for anything" className="focus:outline-none text-black lg: w-[530px] md:w-[270px] h-[38px] lg:px-[11px] lg:py-[8px] px-[3px] py-[3px] flex items-center  text-[16px] "/> 
                    </div>
                
                    

                    <Link to="/cart" className="flex"> <li className="text-white">Cart</li>
                    <button type="button"   className='flex relative'>
               
               <p className='absolute right-4 top-4 border rounded-full bg-black w-[24px] text-[12px] h-[24px] p-[2px] border-none'>{itemCount}</p>
               <FaShoppingCart  className='text-[35px] text-white border rounded-full p-2 '/>
             </button>
                     </Link>
                    <Link to="/checkout"> <li className="text-white">Checkout</li> </Link>
                    
                
                    <li><img src={Bell} alt="logo" /></li>
                    
                

                <li className="pl-4"><img src={Profileimg} alt="logo" /></li>
            </ul>
        </div>

        <div className="lg:hidden block h-[140px] text-[16px]  w-full bg-blue-600">
            <div className="flex-col  pt-6">
                <div className="flex justify-between items-center px-8 md:px-14  pb-3">
       <div className="" ><p className=""><img src={Shoppie} alt="logo" /></p></div> 

        <div className="flex space-x-2 ">
        <p className=""><img src={GearSix} alt="logo" /></p>
        <p><img src={Bell} alt="logo" /></p>
        </div>
       
        </div>
       
       <div className="flex justify-around items-center    ">
        <div className="p-2 bg-white  text-[12px] border rounded-lg md:w-3/4 "> 
                <span className="p-2 text-gray-200 "><button type="button"   >
                <BiSearch />
                </button></span>
                    <input type="text" placeholder=" Search for Anything"  className="focus:outline-none  "/> 
                    </div>
                <div>
                <p><img src={Icon} alt="logo" /></p>
                </div>
                
                    </div>
        </div>
        

        </div>
        </div>
    )
}