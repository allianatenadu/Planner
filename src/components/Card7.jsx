import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";

function Card7() {
  return (
    <div className="mt-36 bg-gradient-to-r  bg-cyan-900 h-[80vh] flex justify-center">
      <div className="mt-28 text-white">
      <div className='flex justify-around mt-5 items-center'>
              <h1 className='bg-indigo-500 px-4 py-4 text-xl font-bold text-white rounded-tl-2xl rounded-br-2xl '>Proxi</h1>
              <h1 className='font-bold text-4xl  font-sans mt-1 '>Proxima </h1>
            </div>
            <div className='flex justify-center  font-sans gap-6 my-7 text-[17px] '>
             <Link to="/">Home</Link>
              <Link to="/booking">Booking</Link>
              <Link to="/contact">Contact</Link>
             <Link to="/services">Services</Link>
            </div>  
            <div className="flex justify-center gap-12 mt-10">
              <div>
              <FaFacebookF />
              </div>
              <div>
              <FaTwitter />
              </div>
              <div>
              <CiYoutube  />
              </div>
            </div>  
            <div className="mt-11 ml-8">
                <h1>&copy; copyright 2024, Proxima Tech. All right reserved </h1>
              </div>  
      </div>
    </div>
  )
}

export default Card7
