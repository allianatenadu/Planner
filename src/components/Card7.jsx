import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";

function Card7() {
  return (
    <div className='mt-24'>
      <div className="bg-black min-h-[80vh] flex justify-center items-center px-4">
        <div className="text-white w-full max-w-5xl text-center">
          {/* Logo and Title */}
          <div className='flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-4 mt-5'>
            <h1 className='bg-indigo-500 px-6 py-3 text-xl font-bold rounded-tl-[2rem] rounded-br-[2rem]'>
              Proxi
            </h1>
            <h1 className='font-bold text-3xl sm:text-4xl font-sans'>
              Proxima
            </h1>
          </div>

          {/* Nav Links */}
          <div className='flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 text-base sm:text-lg'>
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/event" className="hover:border-b-4 border-blue-700 border-solid">
              Event
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-10 text-2xl">
            <FaFacebookF />
            <FaTwitter />
            <CiYoutube />
          </div>

          {/* Footer */}
          <div className="mt-10">
            <h1 className="text-sm sm:text-base">
              &copy; Copyright 2024, Traect Tech. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card7;
