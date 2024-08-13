import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

function Card7() {
  return (
    <div className="mt-36 bg-cyan-950 h-[80vh] flex justify-center">
      <div className="mt-28 text-white">
      <div className='flex gap-3 justify-center mt-5 ml-9'>
              <h1 className='bg-indigo-500 p-2 w-[35px] text-3xl h-[48px] font-bold text-white rounded '>T</h1>
              <h1 className='font-bold text-4xl  font-sans mt-1 '>Treact</h1>
            </div>
            <div className='flex justify-center font-sans gap-16 text-[17px] mt-6'>
              <a href="">Home</a>
              <a href="">Booking</a>
              <a href="">Contact</a>
              <a href="">Services</a>
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
                <h1>&copy; copyright 2024, Traect Tech. All right reserved </h1>
              </div>  
      </div>
    </div>
  )
}

export default Card7
