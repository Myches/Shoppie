

import { useNavigate } from "react-router-dom"
import { useCart } from "../Context/cartContext";
import axios from "axios";
import { useState,useEffect } from "react";
import Pagination from "../Components/Pagination";


interface Product {
  photos: { url: string }[];
  current_price: { NGN?: number; GHS?: number }[];
  unique_id: number;
  name: string;
  description: string;
  reviews:string;
}
interface ApiResponse {
  items: Product[];
  page: number;
  size: number;
  total: number;
  
}



export default function HomePage () {

  
  const [products, setProducts] = useState<ApiResponse| null>(null) ;
  const [postsPerPage] = useState<number>(10)
    const [currentPage,setCurrentPage] = useState<number>(1)

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
  console.log(products);


  const { addToCart } = useCart();

  
  const navigate = useNavigate();

  const productDetails = (id:number) => {
    navigate(`/ProductDetails/${id}`);

  }
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = products && products.items.slice(indexOfFirstPost, indexOfLastPost) || [];

const paginate = (pageNumber:number) =>  setCurrentPage(pageNumber)
  
  const filteredNames = [
    'Dark Red Hoodie', 'Cityscape Hoodie', 'Dark Blue Hoodie', 'Cozy Comfort Hoodie',
    'Seaside Hoodie', 'Frostbite Hoodie', 'Grey Hoodie', 'Arctic Chill Hoodie',
    'Alpine Adventure Hoodie', 'Yeast White Hoodie', 'Zen Zone Hoodie'
  ];



    return (
        <div className='m-8  h-[100%] '>
         <div className="flex text-[32px]">
          <p className=" text-black ">Sort by :</p> 
          <p className="text-gray-400">
          <select id="options">
            <option >Popular</option>
            <option >Brand</option>
            <option >Size</option>
          </select>
          </p>
         </div>

         <div className="lg:grid lg:grid-cols-4 lg:gap-y-12 md:gap-x-8  gap-y-4 p-8 grid grid-cols-1 ">
          {
          currentPosts
            .filter(item => 
              !filteredNames.includes(item.name) && 
              (item.current_price[0]?.NGN || item.current_price[0]?.GHS)
            )
            .map((data, index: number) =>  (
              <div key={index} className="space-y-2 text-[16px]  hover "   >
                <div className="md:flex md:justify-around md:items-center" onClick={() => productDetails(data.unique_id)} >
                <img src={`https://api.timbu.cloud/images/${data.photos[1]?.url}`} alt="picture"   className="w-[279px] h-[282px]"/>
                </div>

                

                <div className="font-semibold flex justify-around items-center md:w-1/2 md:mx-auto lg:w-full lg:mx-0">
                  <p>{data.name}</p>
                  <p>{data.current_price[0]?.NGN || data.current_price[0]?.GHS} NGN</p>
                </div>

                <div className="flex justify-around items-center ">
                  <p className="flex">  <img src={`https://api.timbu.cloud/images/${data.photos[0]?.url}` } alt="picture"   /><span className="text-gray-600">*6k Reviews</span></p>
                  </div>
                  
                  <div className="flex justify-around items-center ">

                  <p className="bg-black text-white  p-[10px]  text-[12px] border rounded-lg hover:bg-gray-500">
                  
                  <button onClick={() => addToCart({ ...data, quantity: 1 })}> Add to Cart </button>
                   
                    </p> 
                </div> 
                




              </div>

            )
  
            )
          }

         </div>

         <div className=" lg:pt-[120px] lg:pb-[600px]  pt-[60px] pb-[300px] flex justify-around items-center">
          <button className="bg-black text-white  p-[10px] text-[24px] w-[426px] h-[68px] border rounded-lg flex justify-around items-center">
           Load More
          </button>

         </div>
         
         <Pagination  postsPerPage={postsPerPage}  totalPosts={products?.items?.length || 0}  paginate={paginate}  />

        </div>
    )
}