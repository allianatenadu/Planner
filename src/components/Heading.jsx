// import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Heading() {
//   const [show,setShow]=useState(false)
//   const handleClick=()=>{
//     setShow(!show)
//   }

//   return (
//     <div
//       className="bg-cover bg-center bg-no-repeat h-[88vh] w-screen md:w-[100%] md:h-[30vh] lg:h-[80vh] sm:h-[50vh]"
//       style={{
//         backgroundImage:
//           'url("https://images.pexels.com/photos/26691733/pexels-photo-26691733/free-photo-of-close-up-of-a-jellyfish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
//       }}
//     >
//       <div className="flex w-full items-center justify-center px-3">
//         <div className="flex items-center justify-between container p-3 relative ">
//           {/* Brand Logo */}
//           <div className="flex  gap-x-6 justify-evenly items-center">
//             <h1 className="bg-indigo-500 px-4 py-4 text-xl font-bold text-white rounded-tl-[2rem] rounded-br-[2rem] hidden lg:block">
//               Proxi
//             </h1>
//             <h1 className="font-bold text-2xl  font-sans mt-1 text-white ">
//               Proxima
//             </h1>
//           </div>

//           <div className="flex md:p-0 py-2 justify-between absolute md:static top-[4rem] right-0 items-center gap-2 w-full flex-col md:flex-row rounded-lg md:bg-transparent bg-white/95" >
//             {/* Nav Links */}
//             <div className="flex items-center gap-5 mx-auto  md:text-white text-black/80 font-semibold flex-col md:flex-row"  >
//               <Link to="/">
//                 <a
//                   href=""
//                   className="border-b-4 border-blue-500 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out"
//                 >
//                   Home
//                 </a>
//               </Link>
//               <Link to="/booking">
//                 <a
//                   href=""
//                   className="border-b-4 border-blue-500 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out"
//                 >
//                   Booking
//                 </a>
//               </Link>
//               <Link to="/contact">
//                 <a
//                   href=""
//                   className="border-b-4 border-blue-500 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out"
//                 >
//                   Contact
//                 </a>
//               </Link>
//               <Link to="/event">
//                 <a
//                   href=""
//                   className="border-b-4 border-blue-500 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out"
//                 >
//                   Event
//                 </a>
//               </Link>
//             </div>
//             {/* CTA Buttons */}
//             <div className="flex justify-center gap-6">
//               <Link
//                 className="bg-blue-700 hidden lg:block px-7 py-3 rounded text-lg text-white hover:bg-blue-800  text-center"
//                 to="/sign-up"
//               >
//                 Sign Up
//               </Link>

//               <Link
//                 className="bg-gray-600 text-white px-7 py-3 rounded text-lg  hover:bg-slate-500  text-center"
//                 to="/log-in"
//               >
//                 logIn
//               </Link>
//             </div>
//           </div>

//           <FaBars className="text-lg text-white cursor-pointer md:hidden"  />
//         </div>
//       </div>
//       <div className="flex justify-center mt-24">
//         <div className="text-white flex-col flex ">
//           <h1 className="text-5xl font-bold hidden md:block">Proxima Event Planner</h1>
//           <h1 className="text-2xl mt-5 min-h-2 hidden md:block">
//             Book your event with us and make it memorable,
//             <br /> we are here to make your event memorable.
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }





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
