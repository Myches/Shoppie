
import BlogData from "../Components/BlogData"
import { Link } from "react-router-dom"



export default function HomePage () {

  

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
            BlogData.map((data,index :number)=> (
              <div key={index} className="space-y-2 text-[16px]   ">
                <div className="md:flex md:justify-around md:items-center">
                <img src={data.img} alt="picture"  />
                </div>

                

                <div className="font-semibold flex justify-around items-center md:w-1/2 md:mx-auto lg:w-full lg:mx-0">
                  <p>{data.name}</p>
                  <p>{data.price}NGN</p>
                </div>

                <div className="flex justify-around items-center ">
                  <p className="flex">  <img src={data.star} alt="picture" /><span className="text-gray-600">{data.reviews}</span></p>
                  </div>

                  <div className="flex justify-around items-center ">
                  <p className="bg-black text-white  p-[10px]  text-[12px] border rounded-lg">
                  <Link to="/Cart">
                    <button>Add to Cart </button>
                    </Link>
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



        </div>
    )
}