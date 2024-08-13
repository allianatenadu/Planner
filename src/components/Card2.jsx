import { IoIosArrowRoundForward } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LuClock } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";


function Card2() {
  return (
    <div>
      <div className=" mx-5 my-5 mt-40 flex justify-center gap-16">
        <div>
          <h1 className="text-5xl font-bold">Trending Tours</h1>
          <h1 className="mt-3 text-xl text-slate-400  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
          </h1>
         <div className="flex justify-start ml-4">
         <div className="mt-3 flex justify-center gap-2  font-semibold">
            <h1 className="text-2xl  font-semibold text-indigo-600">Views all</h1>
            <IoIosArrowRoundForward className="text-4xl text-indigo-600 font-semibold " />
          </div>
         </div>
        </div>

        <div>
         <img src="https://cdn.prod.website-files.com/61549f9352f3558157a226ea/625da640d2eec5a26562334e_Two%20chairs%20and%20umbrella%20under%20palm%20trees%20on%20the%20beach.jpg" alt="" className=" w-[939px] h-[60vh] rounded-2xl " />
         <div className="mt-4 flex justify-between">
          <div>
            <h1 className="text-indigo-600 text-2xl font-bold">Beachfront</h1>
          </div>
          <div className="flex justify-center">
          <BsCurrencyDollar className="font-bold text-2xl mt-1" />
           <h1 className="font-bold text-slate-400 text-xl">99 per day</h1>
          </div>
         </div>
         <div className="mt-4 text-xl font-bold">
          <h1>A Trip to the Bahamas and the Carribean Ocean</h1>
         </div>
         <div className="mt-6 flex justify-center gap-4">
           <div className="flex justify-center gap-2">
           <HiArrowTrendingUp className="text-xl" />
           <h1>Trending</h1>
           </div>
           <div className="flex justify-center gap-2">
           <LuClock className="text-xl" />
           <h1>7 Days Tour</h1>
           </div>
           <div  className="flex justify-center gap-2">
           <FiMapPin className="text-xl" />
           <h1>Africa</h1>
           </div>
         </div>
         <button className=" mt-14 rounded-xl text-2xl text-white bg-indigo-600 p-4 w-[20rem]  hover:bg-indigo-800">Book Now</button>
        </div>

        <div>
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/382607968.jpg?k=c340efe01096383296f0980c72cef086a2f05497479db592009629ab96e0cd72&o=&hp=1" alt="" className=" w-[939px] h-[60vh] rounded-2xl " />
          <div className="mt-4 flex justify-between">
          <div>
            <h1 className="text-indigo-600 text-2xl font-bold">Cruise</h1>
          </div>
          <div className="flex justify-center">
          <BsCurrencyDollar className="font-bold text-2xl mt-1" />
           <h1 className="font-bold text-slate-400 text-xl">69 per day</h1>
          </div>
         </div>
         <div className="mt-4 text-xl font-bold">
          <h1>Cruise to the Mariana Trench and the Phillipines</h1>
         </div>
         <div className="mt-6 flex justify-center gap-4">
           <div className="flex justify-center gap-2">
           <HiArrowTrendingUp className="text-xl" />
           <h1>Trending</h1>
           </div>
           <div className="flex justify-center gap-2">
           <LuClock className="text-xl" />
           <h1>7 Days Tour</h1>
           </div>
           <div  className="flex justify-center gap-2">
           <FiMapPin className="text-xl" />
           <h1>Australia</h1>
           </div>
         </div>
         <button className=" mt-14 rounded-xl text-2xl text-white bg-indigo-600 p-4 w-[20rem]  hover:bg-indigo-800">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card2
