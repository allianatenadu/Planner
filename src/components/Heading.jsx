import React from 'react'
import { Input } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

export default function Heading() {
  return (
    <div className='bg-gray-100 h-[90vh] w-[100%] p-3'>
      <nav className='flex justify-center gap-x-20 pt-6'>
         <a href="" className='border-b-4 border-solid border-opacity-0 pb-2 border-teal-800 hover:border-opacity-100 duration-300 ease-in-out '>Home</a>
        <NavLink to="/booking">
        <a href="" className='border-b-4 border-solid border-opacity-0 pb-2 border-teal-800 hover:border-opacity-100 duration-300 ease-in-out'>Booking</a>
        </NavLink>
         <NavLink to='/contact'>
         <a href="" className='border-b-4 border-solid border-opacity-0 pb-2 border-teal-800 hover:border-opacity-100 duration-300 ease-in-out'>Contact</a>
         </NavLink>
        <NavLink to='/event'>
          <a href="" className='border-b-4 border-solid border-opacity-0 pb-2 border-teal-800 hover:border-opacity-100 duration-300 ease-in-out'>Event</a>
        </NavLink>
      </nav>
      <div className='mt-12 flex justify-center px-24'> {/* added mt-12 to move the header down */}
  <div className='w-[50rem]  h-[70vh]'>
    <h1 className='text-5xl font-serif font-bold '>Journey Explore Celebrate  Repeat</h1>
    <div className='w-72 mt-48'>
    </div>
  </div>
  <div className='mt-[-2rem]'> {/* reduced margin top to move the image up */}
    <img src="https://i.pinimg.com/564x/87/04/ab/8704ab176f7350f7110c93a84def544a.jpg" alt="" className='h-[10rem] w-[30rem] object-contain' /> {/* reduced image height */}
  </div>
  <div className='mt[-4rem]' >
    <img src="https://posrednik24.com/wp-content/uploads/2022/11/Traveller-1.svg" alt="" className='' /> {/* increased image height */}
  </div>
</div>
    </div>
  )
}
