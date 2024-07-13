

import { Link } from "react-router-dom"

import { useCart } from '../Context/cartContext';

interface CartItem {
    current_price: { NGN?: number; GHS?: number }[];
    quantity: number;
  }


export default function Cart (){

    


    const { cart, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useCart();

    
    const total = cart.reduce((sum: number, item: CartItem) => {
        const ngnPrice = item.current_price[0]?.NGN;
        const ghsPrice = item.current_price[0]?.GHS;
        const price = ngnPrice !== undefined ? ngnPrice : (ghsPrice !== undefined ? ghsPrice : 0);
        return sum + (price * item.quantity);
      }, 0);
      
      
    const itemCount = cart.reduce((sum:any, item:any) => sum + item.quantity, 0);
  




    return (
        <div className="lg:m-12 m-6  h-[100%]">
            <div className="flex flex-col  lg:pl-[100px] pl-[50px]">
            <h1 className="text-[35px] font-bold ">My Cart </h1>
            
            <p className="py-4 text-[22px] text-gray-400">{itemCount} items</p>
           
            </div>
            <div className=" flex flex-col lg:gap-x-4 gap-x-2   ">
            {cart.map((item) => (
            <div className="lg:flex lg:justify-between lg:items-center flex flex-col  lg:p-6 p-2 border-b-2 border-gray-300 pb-4"  key={item.id}>
                <div className="lg:flex flex flex-col gap-4 ">
                    <p className="w-[80px] h-[80px] lg:mb-0 mb-8"> <img src={`https://api.timbu.cloud/images/${item.photos[1]?.url}`} alt="picture" /></p>     
                
                <div className="flex flex-col  ">
                    <h1 className="lg:text-[25px] text-[16px] font-bold">{item.name}</h1>
                    <p className="lg:text-[18px] text-[16px] font-bold">Category: <span className="text-gray-400">Hoodie</span></p>
                    <p className="text-gray-400 lg:text-[18px] text-[16px]">
                        QTY: {item.quantity} </p>
                        <p className="text-black lg:text-[18px] text-[16px] space-x-4"> <button onClick={() => increaseQuantity(item.id)}>+</button>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                         </p>
                </div>
                </div>

                <div className="flex flex-col">
                    <p className="lg:text-[25px] text-[16px] font-bold flex justify-center items-center">{item.current_price[0]?.NGN || item.current_price[0]?.GHS} </p>
                    <button className="lg:p-4 p-2 text-white bg-black flex justify-center items-center lg:w-[200px] w-[100px]" onClick={() => removeItem(item.id)}>Remove</button>

                </div>

            </div>))}

 <button onClick={clearCart} className="py-4 text-[22px] text-black font-bold">Clear Cart</button>
           
            </div>


            <div className="p-8">
                <p className="text-[35px] font-bold  pl-[50px]">Cart Totals</p>
                <div className="lg:p-8 p-4 flex flex-col justify-between  lg:gap-4 gap-2 font-bold lg:text-[25px] text-[16px]">

                <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4">
                <p>Subtotal</p>
                <p>{total.toFixed(2)}NGN</p>
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
                <p></p>
                <p>{total.toFixed(2)} NGN</p>
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