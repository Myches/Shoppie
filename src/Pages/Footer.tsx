
import Shoppie from "/images/Shoppie.png"
import { BiSearch } from 'react-icons/bi';


export default function Footer () {
    return (
        <div className="bg-blue-600 text-[16px]  text-white p-8 lg:h-[550px] h-[1000px] pb-12 flex justify-between items-center ">
            <div className="lg:grid lg:grid-cols-4 grid grid-cols-1 gap-y-4">
                <div className="flex flex-col gap-2 ">
                    <p className="pb-4"><img src={Shoppie} alt="logo"  /></p>
                    <p>Shoppie is an online store designed for selling 
                       clothing and potentially other retail products. 
                       The brand focuses on a modern, user-friendly shopping 
                       experience, catering to a wide audience.</p>
                    <p className="flex items-center bg-white border rounded-lg text-[12px]"><span className="p-2 text-gray-200"><button type="button"  >
                <BiSearch />
                </button></span>
                    <input type="text" placeholder=" Search for Anything" className=" focus:outline-none px-[11px] py-[8px] flex items-center text-black text-[12px]"/> </p>

                </div>
                

  
                <div className=" flex-col  lg:gap-2 gap-0 lg:pl-12 ">
                    <p className="lg:mb-4 mb-2 font-bold flex lg:space-x-0  space-x-4 text-gray-300  " > <p>About us</p> </p>
                    <ul className="gap-x-4 ">
                        <li>About Shoppie</li>
                        <li>Testimonials</li>
                        <li>Be a Sponsor</li>
                        <li>Events</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className=" flex-col lg:gap-2 gap-0  ">
                    <p className="lg:mb-4 mb-2 font-bold flex lg:space-x-0 space-x-4 text-gray-300 "> <p>Shop Here</p> </p>
                    <ul className="gap-x-4 ">
                        <li>Our Products</li>
                        <li>Categories</li>
                        <li>My Cart </li>
                        <li>Login/Register</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className=" flex-col lg:gap-2 gap-0  ">
                <p className="lg:mb-4 mb-2 font-bold flex lg:space-x-0 space-x-4 text-gray-300  " ><p>Follow Us</p></p>
                    <ul className="gap-x-4 ">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitch </li>
                        <li>WhatsApp</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                </div>
                

            </div>

        



    )
}