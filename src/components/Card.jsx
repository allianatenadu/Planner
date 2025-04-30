import { PiLessThan } from "react-icons/pi";
import { PiGreaterThanLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="px-4 py-8">
      {/* Heading & icons */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-7xl mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 md:mb-0">Popular Hotels</h1>
        <div className="flex gap-4">
          <PiLessThan className="bg-indigo-500 text-white p-3 text-4xl rounded-full hover:bg-indigo-700" />
          <PiGreaterThanLight className="bg-indigo-500 text-white p-3 text-4xl rounded-full hover:bg-indigo-700" />
        </div>
      </div>

      {/* Cards container */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center flex-wrap max-w-7xl mx-auto">
        {[{
          title: "Hudak Home",
          img: "https://login.ultraagent.com/agentimagegallery/20698/backyard.jpg",
          rating: 4.8
        }, {
          title: "Wyatt Residency",
          img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/f7/83/22/poolside-at-the-african.jpg",
          rating: 4.5
        }, {
          title: "Soho Paradise",
          img: "https://i0.wp.com/greenviewsresidential.com/wp-content/uploads/2018/05/greenviews-luxury-apartments-accra-amenities-pool-al-night.jpg?resize=1080%2C720&ssl=1",
          rating: 4.9
        }].map((hotel, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded-tl-[2.77rem] rounded-br-[3rem] w-full max-w-sm"
          >
            <img
              src={hotel.img}
              alt={hotel.title}
              className="w-full h-[200px] object-cover rounded-tl-[2.77rem]"
            />
            <div className="flex justify-between items-center px-4 mt-4">
              <h1 className="font-bold text-xl">{hotel.title}</h1>
              <div className="flex items-center gap-1">
                <FaStar className="text-amber-400 text-xl" />
                <h1 className="font-bold text-xl">{hotel.rating}</h1>
              </div>
            </div>
            <p className="px-4 mt-4 text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro dolorum possimus dicta impedit dignissimos laudantium perferendis recusandae quia asperiores fuga.
            </p>
            <Link to="/booking">
              <button className="mt-6 w-full bg-indigo-600 text-white text-xl font-semibold p-4 rounded-br-[3rem] hover:bg-indigo-800">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
