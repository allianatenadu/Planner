import { IoIosArrowRoundForward } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LuClock } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";

function Card2() {
  return (
    <div className="mt-40 px-4">
      <div className="flex flex-col md:flex-row justify-center gap-10">

        {/* Left section: Text content */}
        <div className="md:w-1/3">
          <h1 className="text-3xl md:text-5xl font-bold">Trending Tours</h1>
          <p className="mt-3 text-base md:text-xl text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
          </p>
          <div className="mt-3 flex items-center gap-2 text-indigo-600 font-semibold cursor-pointer">
            <h1 className="text-lg md:text-2xl">View all</h1>
            <IoIosArrowRoundForward className="text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Center & Right cards */}
        <div className="flex flex-col lg:flex-row gap-10 md:w-2/3">

          {/* Card 1 */}
          <div className="w-full">
            <img
              src="https://cdn.prod.website-files.com/61549f9352f3558157a226ea/625da640d2eec5a26562334e_Two%20chairs%20and%20umbrella%20under%20palm%20trees%20on%20the%20beach.jpg"
              alt=""
              className="w-full h-[40vh] md:h-[60vh] object-cover rounded-2xl"
            />
            <div className="mt-4 flex justify-between">
              <h1 className="text-indigo-600 text-lg md:text-2xl font-bold">Beachfront</h1>
              <div className="flex items-center gap-1">
                <BsCurrencyDollar className="text-xl" />
                <h1 className="text-slate-400 text-sm md:text-xl font-bold">99 per day</h1>
              </div>
            </div>
            <h1 className="mt-4 text-lg md:text-xl font-bold">
              A Trip to the Bahamas and the Caribbean Ocean
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base font-semibold">
              <div className="flex items-center gap-2">
                <HiArrowTrendingUp />
                <span>Trending</span>
              </div>
              <div className="flex items-center gap-2">
                <LuClock />
                <span>7 Days Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin />
                <span>Africa</span>
              </div>
            </div>
            <button className="mt-8 w-full md:w-[16rem] text-lg md:text-2xl bg-indigo-600 hover:bg-indigo-800 text-white rounded-xl py-3">
              Book Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-full">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/382607968.jpg?k=c340efe01096383296f0980c72cef086a2f05497479db592009629ab96e0cd72&o=&hp=1"
              alt=""
              className="w-full h-[40vh] md:h-[60vh] object-cover rounded-2xl"
            />
            <div className="mt-4 flex justify-between">
              <h1 className="text-indigo-600 text-lg md:text-2xl font-bold">Cruise</h1>
              <div className="flex items-center gap-1">
                <BsCurrencyDollar className="text-xl" />
                <h1 className="text-slate-400 text-sm md:text-xl font-bold">69 per day</h1>
              </div>
            </div>
            <h1 className="mt-4 text-lg md:text-xl font-bold">
              Cruise to the Mariana Trench and the Philippines
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base font-semibold">
              <div className="flex items-center gap-2">
                <HiArrowTrendingUp />
                <span>Trending</span>
              </div>
              <div className="flex items-center gap-2">
                <LuClock />
                <span>7 Days Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin />
                <span>Australia</span>
              </div>
            </div>
            <button className="mt-8 w-full md:w-[16rem] text-lg md:text-2xl bg-indigo-600 hover:bg-indigo-800 text-white rounded-xl py-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
