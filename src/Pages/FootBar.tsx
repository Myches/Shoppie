import { Link } from "react-router-dom"
import Cart from "/images/ShoppingBag.png"
import Home from "/images/House.png"
import Checkout from "/images/CreditCard.png"
import { FaShoppingCart } from "react-icons/fa"
import { useCart } from '../Context/cartContext';


export default function FootBar () {

    const { cart } = useCart();
    const itemCount = cart.reduce((sum:any, item:any) => sum + item.quantity, 0)

    return (
        <div className="w-[100vw]  bg-blue-600 p-6">
        <div className="flex justify-around items-center text-white  rounded">
        <Link to="/">  <div className="flex flex-col">
        <p className="flex justify-center items-center" ><img src={Home} alt="home" / ></p>
        <p className="flex justify-center items-center">Home</p>
        </div></Link>
       <Link to="/Cart"><div className="flex flex-col">
        <p className="flex justify-center items-center"><img src={Cart} alt="cart" / ></p>

        <div className="flex">
        <p className="flex justify-center items-center">Cart</p>
        <button type="button"   className='flex relative'>
               
               <p className='absolute right-4 top-4 border rounded-full bg-black w-[24px] text-[12px] h-[24px] p-[2px] border-none'>{itemCount}</p>
               <FaShoppingCart  className='text-[35px] text-white border rounded-full p-2 '/>
             </button>
        </div></div></Link>
        <Link to="/Checkout">
        <div className="flex flex-col">
        <p className="flex justify-center items-center"><img src={Checkout} alt="checkout" / ></p>
        <p className="flex justify-center items-center">Checkout</p>
        </div></Link>

        </div>

        </div>
    )
}