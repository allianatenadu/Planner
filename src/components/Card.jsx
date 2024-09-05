import { PiLessThan } from "react-icons/pi";
import { PiGreaterThanLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div>
       {/* Heading & icons Opening dev    */}
          <div className="mx-14 my-14 flex justify-between">
            <div className="text-5xl font-bold text-blue-950"><h1>Popular Hotels</h1></div>
            <div className="flex justify-center gap-8 mt-2 ">
            <PiLessThan className="bg-indigo-500 text-white p-3 text-5xl rounded-[4rem] hover:bg-indigo-700" />
            <PiGreaterThanLight  className="bg-indigo-500 text-white p-3 text-5xl rounded-[4rem] hover:bg-indigo-700"  />
            </div>
           </div>
       {/* Heading & icons Closing dev    */}
       {/* Card & icons Opening dev    */}
           <div className=" flex justify-center gap-8">
             <div className="border border-solid border-slate-300 w-[340px] rounded-tl-[2.77rem]  rounded-br-[3rem]">
               <img src="https://login.ultraagent.com/agentimagegallery/20698/backyard.jpg" alt="" className="w-[390px] h-[200px] rounded-tl-[2.77rem]" />
                <div className="flex justify-center mt-4">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1 className="font-bold text-2xl">Hudak Home</h1>
                  </div>
                  <div className="flex justify-center gap-3">
                  <FaStar className="text-3xl text-amber-400 " /> 
                  <h1 className="font-bold  text-2xl">4.8</h1>
                  </div>
                </div>
                </div>
                 <div className="flex justify-center mt-4 mx-11 my-11">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro dolorum possimus dicta impedit dignissimos laudantium perferendis recusandae quia asperiores fuga in, voluptate illum dolor dolorem ut dolores! Nemo, nobis?
                  </h1>
                 </div>
                <Link to="/booking" >
                <button className="bg-indigo-600 p-4 w-[340px] rounded-br-[3rem] text-2xl text-slate-50 text-white  hover:bg-indigo-800  ">Book Now
                </button>
                </Link>
             </div>

             <div className="border border-solid border-slate-300 w-[340px] rounded-tl-[2.77rem]  rounded-br-[3rem]">
               <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/f7/83/22/poolside-at-the-african.jpg" alt="" className="w-[390px] h-[200px] rounded-tl-[2.77rem]" />
                <div className="flex justify-center mt-4">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1 className="font-bold text-2xl">Wyatt Residency</h1>
                  </div>
                  <div className="flex justify-center gap-3">
                  <FaStar className="text-3xl text-amber-400 " /> 
                  <h1 className="font-bold  text-2xl">4.5</h1>
                  </div>
                </div>
                </div>
                 <div className="flex justify-center mt-4 mx-11 my-11">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro dolorum possimus dicta impedit dignissimos laudantium perferendis recusandae quia asperiores fuga in, voluptate illum dolor dolorem ut dolores! Nemo, nobis?
                  </h1>
                 </div>
                <Link to="/booking">
                <button className="bg-indigo-600 p-4 w-[340px] rounded-br-[3rem] text-2xl text-slate-50 text-white hover:bg-indigo-800 ">
                  Book Now
                </button>
                </Link>
             </div>

             <div className="border border-solid border-slate-300 w-[340px] rounded-tl-[2.77rem]  rounded-br-[3rem]">
               <img src="https://i0.wp.com/greenviewsresidential.com/wp-content/uploads/2018/05/greenviews-luxury-apartments-accra-amenities-pool-al-night.jpg?resize=1080%2C720&ssl=1" alt="" className="w-[390px] h-[200px] rounded-tl-[2.77rem]" />
                <div className="flex justify-center mt-4">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1 className="font-bold text-2xl">Soho Paradise</h1>
                  </div>
                  <div className="flex justify-center gap-3">
                  <FaStar className="text-3xl text-amber-400 " /> 
                  <h1 className="font-bold  text-2xl">4.9</h1>
                  </div>
                </div>
                </div>
                 <div className="flex justify-center mt-4 mx-11 my-11">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro dolorum possimus dicta impedit dignissimos laudantium perferendis recusandae quia asperiores fuga in, voluptate illum dolor dolorem ut dolores! Nemo, nobis?
                  </h1>
                 </div>
                 <Link to="/booking">
                 <button className="bg-indigo-600 p-4 w-[340px] rounded-br-[3rem] text-2xl text-slate-50  text-white hover:bg-indigo-800 ">
                  Book Now
                 </button>
                 </Link>
             </div>


           </div>
       {/* Card & icons Closing dev    */}

    </div>
  )
}

export default Card
