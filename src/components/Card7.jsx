import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";

function Card7() {
  return (
    <div className='mt-24'>
    <div className=" bg-black h-[80vh] flex justify-center">
        <div className="mt-28 text-white">
        <div className='flex justify-evenly mt-5 items-center'>
                <h1 className='bg-indigo-500 px-4 py-4 text-xl font-bold text-white rounded-tl-[2rem] rounded-br-[2rem] '>Proxi</h1>
                <h1 className='font-bold text-4xl  font-sans mt-1 '>Proxima</h1>
              </div>
              <div className='flex justify-center font-sans gap-16 text-[17px] mt-10'>
               <Link to="/"><a href="">Home</a></Link>
                <Link to="/booking"><a href="">Booking</a></Link>
                <Link to="/contact"><a href="">Contact</a></Link>
                <Link to="/event">
               <a href=""  className="hover:border-b-4 border-solid border-blue-700">Event</a>
               </Link >
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
              <div className="mt-11 flex justify-center">
                  <h1>&copy; copyright 2024, Traect Tech. All right reserved </h1>
                </div>  
        </div>
      </div>
    </div>
  )
}

export default Card7
