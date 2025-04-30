import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Heading() {
  return (
    <div className='bg-gray-100 min-h-screen w-full p-4'>
      {/* Navbar */}
      <nav className='flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 pt-6 text-lg'>
        <NavLink
          to="/"
          className="border-b-4 border-transparent pb-2 hover:border-teal-800 transition duration-300 ease-in-out"
        >
          Home
        </NavLink>
        <NavLink
          to="/booking"
          className="border-b-4 border-transparent pb-2 hover:border-teal-800 transition duration-300 ease-in-out"
        >
          Booking
        </NavLink>
        <NavLink
          to="/contact"
          className="border-b-4 border-transparent pb-2 hover:border-teal-800 transition duration-300 ease-in-out"
        >
          Contact
        </NavLink>
        <NavLink
          to="/event"
          className="border-b-4 border-transparent pb-2 hover:border-teal-800 transition duration-300 ease-in-out"
        >
          Event
        </NavLink>
      </nav>

      {/* Heading Section */}
      <div className='mt-12 flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-10 lg:px-24 gap-8'>
        {/* Text Section */}
        <div className='text-center lg:text-left max-w-xl'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-serif font-bold'>
            Journey Explore Celebrate Repeat
          </h1>
        </div>

        {/* Image Section */}
        <div className='flex flex-col sm:flex-row items-center gap-6'>
          <img
            src="https://i.pinimg.com/564x/87/04/ab/8704ab176f7350f7110c93a84def544a.jpg"
            alt="travel"
            className='h-40 sm:h-48 md:h-56 lg:h-64 object-contain'
          />
          <img
            src="https://posrednik24.com/wp-content/uploads/2022/11/Traveller-1.svg"
            alt="traveller"
            className='h-40 sm:h-48 md:h-56 lg:h-64 object-contain'
          />
        </div>
      </div>
    </div>
  );
}
