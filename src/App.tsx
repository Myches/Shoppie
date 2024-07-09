
import './App.css'
import './fonts.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import FootBar from './Pages/FootBar'
import ScrollToTop from './Components/ScrollToTop'


export default   function App() {


  return (
    <div className='w-[100%] h-[100%]'>
     <BrowserRouter >
     <ScrollToTop />
     <Navbar />
       <Routes >
       <Route  path ="/" element={<HomePage />} />
       <Route  path ="/cart" element={<Cart />} />
       <Route  path ="/checkout" element={<Checkout />} />
       </Routes>
       <Footer />
       <div className='lg:hidden fixed bottom-0 '>
        <FootBar />
        </div>
       </BrowserRouter>
       </div>
    
  )
}

 
