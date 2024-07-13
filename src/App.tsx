
import './App.css'
import './fonts.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Checkout from './Pages/Checkout'
import FootBar from './Pages/FootBar'
import ScrollToTop from './Components/ScrollToTop'
import ProductDetails from './Components/ProductDetails'
import {CartProvider} from './Context/cartContext'
import Cart from './Pages/Cart'


export default   function App() {


  return (
    <CartProvider>
    <div className='w-[100%] h-[100%]'>
     <BrowserRouter >
     <ScrollToTop />
     <Navbar />
       <Routes >
       <Route  path ="/" element={<HomePage />} />
       <Route  path ="/cart" element={<Cart />} />
       <Route  path ="/checkout" element={<Checkout />} />
       <Route  path ="/productdetails/:id" element={<ProductDetails />} />
       </Routes>
       <Footer />
       <div className='lg:hidden fixed bottom-0 '>
        <FootBar />
        </div>
       </BrowserRouter>
       </div>
       </CartProvider>
    
  )
}

 
