import { Link } from "react-router-dom"
import Cart from "/images/ShoppingBag.png"
import Home from "/images/House.png"
import Checkout from "/images/CreditCard.png"



export default function FootBar () {

    return (
        <div className="w-[100vw]  bg-blue-600 p-6">
        <div className="flex justify-around items-center text-white  rounded">
        <Link to="/">  <div className="flex flex-col">
        <p className="flex justify-center items-center" ><img src={Home} alt="home" / ></p>
        <p className="flex justify-center items-center">Home</p>
        </div></Link>
       <Link to="/Cart"><div className="flex flex-col">
        <p className="flex justify-center items-center"><img src={Cart} alt="cart" / ></p>
        <p className="flex justify-center items-center">Cart</p>
        </div></Link>
        <Link to="/Checkout">
        <div className="flex flex-col">
        <p className="flex justify-center items-center"><img src={Checkout} alt="checkout" / ></p>
        <p className="flex justify-center items-center">Checkout</p>
        </div></Link>

        </div>

        </div>
    )
}