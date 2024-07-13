

import { useParams } from 'react-router-dom';
import { useCart } from '../Context/cartContext';
import axios from "axios";
import { useState,useEffect } from "react";


interface Product {
    photos: { url: string }[];
    current_price: { NGN?: number; GHS?: number };
    unique_id: number;
    name: string;
    description: string;
    id:number
    reviews: string;
  }
  interface ApiResponse {
    items: Product[];
    page: number;
    size: number;
    total: number;
  }
  



export default function ProductDetails() {
    const { id } = useParams();
    const { cart, increaseQuantity, decreaseQuantity, addToCart } = useCart();

  
    const [products, setProducts] = useState<ApiResponse| null>(null) ;

    const fetchPropertiesData = async () => {
        try {
          const apiKey = '9ba5e6589991445890414afec15cff6e20240712123904995477';
          const apiId = '7OOOFDTSXYW6JKR';
          const orgId = '43066119e05b4b82b884cbd8420d9c36';
    
          const response = await axios.get<ApiResponse>(
            `https://api.timbu.cloud/products?organization_id=${orgId}&reverse_sort=false&Appid=${apiId}&Apikey=${apiKey}`
          );
    
          setProducts(response.data);
        } catch (error) {
          console.error(`Error fetching data: ${error}`);
          setProducts(null);
        }
      };
    
      useEffect(() => {
        fetchPropertiesData();
      }, []);
  
  
      const item: Product | undefined = products?.items.find(item => item.id === Number(id));
    const itemCount = cart.reduce((sum:any, item:any) => sum + item.quantity, 0);

   

    if (!item) {
        return <div className="h-[100vh]" >Product not found</div>;
    }

    return (
        
             <div className="h-[100%]">
                <div className="flex justify-around   pt-12 grid grid-cols-2 gap-x-4">
                    <div>
                   <div className=" p-4 space-y-4">
                  <p className="flex justify-center items-center">  <img src={`https://api.timbu.cloud/images/${item.photos[1]?.url}`} className="w-[350px] h-[350px] border rounded-lg border-8  "  alt="image"  /> </p>
                    <p className="flex justify-around items-center space-x-4">
                    <img src={`https://api.timbu.cloud/images/${item.photos[1]?.url}`} className="w-[150px] h-[150px] border rounded-lg border-8  opacity-50"  alt="image"  />
                    <img src={`https://api.timbu.cloud/images/${item.photos[1]?.url}`} className="w-[150px] h-[150px] border rounded-lg border-8  opacity-75"  alt="image"  />
                    <img src={`https://api.timbu.cloud/images/${item.photos[1]?.url}`} className="w-[150px] h-[150px] border rounded-lg border-8  opacity-95"  alt="image"  />
                    </p>
                   </div> 

                
                   
                    </div>
                    <div className="flex flex-col  items-center p-12">
                    <p className="lg:text-[45px] text-[16px] font-bold">{item.name}</p>
                    <p className="  ">{item.description}</p>
                    <div className="flex space-x-8 pt-6">
                    <p className="text-black font-bold flex justify-center items-center  lg:text-[30px] text-[16px] space-x-4">
                         <button onClick={() => increaseQuantity(item.unique_id)}>+</button>
                        <button onClick={() => decreaseQuantity(item.unique_id)}>-</button>
                         </p>
                         <p className="bg-black text-white  p-[10px]  text-[18px] border rounded-lg">   
                  <button onClick={() => addToCart({ ...item, quantity: 1 })}> Add to Cart </button>
                   </p> 
                    </div>
                    <p className="text-black lg:text-[22px] text-[16px]  pt-4">
                        QTY: {itemCount} 
                        </p>
                        <p className="flex justify-around items-center text-black lg:text-[22px] font-bold " ><p>PRICE :{item.current_price[0]?.NGN || item.current_price[0]?.GHS}</p>  NGN</p>
                        <p className="flex justify-between items-center font-bold lg:text-[22px]" > <p>REVIEWS  : </p><img src={`https://api.timbu.cloud/images/${item.photos[0]?.url}` } alt="pic"   /> </p>
                    
                    </div>

                </div>
                
               
              
          
            </div>
            
            
            
            
    );
}
