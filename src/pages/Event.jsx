import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Card7 from '../components/Card7'
import { IoStarSharp } from "react-icons/io5";

export default function Event() {
   // Hotels Cards Opening
    const ForHotels=[
      {
        Name:"Accra city Hotel",
        Image:"https://media-cdn.tripadvisor.com/media/photo-p/2c/29/0c/19/accra-city-hoteljpg.jpg",
        Price:"$100",
        Order:"Book"
      },
      {
        Name:"Labadi Beach Hotel",
        Image:"https://labadibeachhotelgh.com/wp-content/uploads/front-v.jpg",
        Price:"$150",
        Order:"Book"
      },
      {
        Name:"Alisa Hotel",
        Image:"https://alisa-hotel.accra-hotels-gh.com/data/Photos/OriginalPhoto/5308/530838/530838702/accra-alisa-hotel-photo-24.JPEG",
        Price:"$190",
        Order:"Book"
      },
      {
        Name:"Movenpick Hotel",
        Image:"https://www.accrahotelsnow.com/data/Pics/OriginalPhoto/2717/271741/271741745/pic-movenpick-ambassador-hotel-accra-80.JPEG",
        Price:"$140",
        Order:"Book"
      },
      {
        Name:"Kempinski Hotel",
        Image:"https://www.kempinski.com/var/site/storage/images/4/4/1/3/1573144-1-eng-GB/968e74a83d9a-75399546_4K.jpg",
        Price:"$170",
        Order:"Book"
      },
      {
        Name:"La Palm Beach Hotel",
        Image:"https://www.hotelscombined.ca/himg/da/33/1f/expedia_group-11774-19912745-307012.jpg",
        Price:"$200",
        Order:"Book"
      },
    ]
// Hotels Cards closing 

    // For Tourism Cards From  Ghana Tourism Authority, Opening 
     const ForTourism=[
        {
          Name:"Boti Fall",
          Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxefz5kW9mbiw6s2PLbVGNVSdnBNiBGBZlA1hhMfNibwmXFKwd",
          Price:"$150",
          Order:"Book"
        },
        {
          Name:"Elmina Castle",
          Image:"https://149357548.v2.pressablecdn.com/wp-content/uploads/2011/10/elmina.jpg",
          Price:"$150",
          Order:"Book"
        },
        {
          Name:"Shai hills",
          Image:"https://fcghana.org/wp-content/uploads/2024/04/shaihills-zibras-1024x687.jpg",
          Price:"$150",
          Order:"Book"
        },
        {
          Name:"Mount Afadjato",
          Image:"https://visitghana.com/wp-content/uploads/2019/02/2703_Mt.-Afajato.jpg",
          Price:"$150",
          Order:"Book"
        },
        {
          Name:"Larabanga mosque",
          Image:"https://mosqpedia.org/img/cache/largeimage/nyuLkvCn5SBFJKhDYx1X6D2isUyb6LiAFKek3yTZ",
          Price:"$150",
          Order:"Book"
        },
        {
          Name:"Adomi bridge",
          Image:"https://civilengineeringgh.wordpress.com/wp-content/uploads/2015/12/screenshot-9.png",
          Price:"$150",
          Order:"Book"
        },
     ]
 // For Tourism Cards From  Ghana Tourism Authority, Closing 
 
  return (
        <div>  
            <div
  className="bg-cover bg-center flex justify-center bg-no-repeat h-[88vh] w-full relative"
  style={{
    backgroundImage:
      'url("https://images.pexels.com/photos/7269212/pexels-photo-7269212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
  }}
>
  {/* Navigation Links */}
  <div className="flex flex-wrap justify-center mt-10 text-yellow-800 font-bold gap-x-5 md:gap-x-20">
    <Link to="/" className="text-sm md:text-lg text-center">
      <a
        href=""
        className="pb-2 border-b-4 border-solid border-lime-600 border-opacity-10 hover:border-opacity-100 duration-300 ease-in-out"
      >
        Home
      </a>
    </Link>
    <Link to="/booking" className="text-sm md:text-lg text-center">
      <a
        href=""
        className="pb-2 border-b-4 border-solid border-lime-600 border-opacity-10 hover:border-opacity-100 duration-300 ease-in-out"
      >
        Booking
      </a>
    </Link>
    <Link to="/contact" className="text-sm md:text-lg text-center">
      <a
        href=""
        className="pb-2 border-b-4 border-solid border-lime-600 border-opacity-10 hover:border-opacity-100 duration-300 ease-in-out"
      >
        Contact
      </a>
    </Link>
    <Link to="/event" className="text-sm md:text-lg text-center">
      <a
        href=""
        className="pb-2 border-b-4 border-solid border-lime-600 border-opacity-10 hover:border-opacity-100 duration-300 ease-in-out"
      >
        Event
      </a>
    </Link>
  </div>

  {/* Hero Section */}
  <div className="absolute mt-20 md:mt-32 text-white text-center px-4 md:px-0">
    <h1 className="text-3xl md:text-5xl font-bold">Proxima Event Planner</h1>
    <h1 className="text-lg md:text-2xl mt-5">
      Book your event with us and make it memorable,
      <br /> we are here to make your event memorable.
    </h1>
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      <Link to="/sign-up">
        <button className="bg-cyan-600 px-8 md:px-14 py-3 rounded-lg text-white">
          Sign Up
        </button>
      </Link>
      <Link to="/log-in">
        <button className="bg-white px-8 md:px-14 py-3 rounded-lg text-black">
          Log In
        </button>
      </Link>
    </div>
  </div>
</div>
         <div className="flex flex-wrap justify-center md:justify-evenly mx-4 md:mx-12 mt-14">
  <div className="p-3 w-full md:w-auto">
    <img
      src="https://images.pexels.com/photos/27086164/pexels-photo-27086164/free-photo-of-three-women-sitting-at-a-table-with-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt=""
      className="w-full md:w-[400px] h-[50vh] md:h-[70vh] rounded-md"
    />
  </div>
  <div className="w-full md:w-auto text-center md:text-left">
    <h1 className="text-2xl md:text-3xl font-bold">Conference Meeting</h1>
    <h1 className="tracking-tighter mt-3 text-sm md:text-base">
      Conference is an event where a number of people come together to discuss a particular subject
      <br /> or share information. Conferences can last for one day,
      <br /> or be held over several days, depending on the size and scope of the event.
      <br /> Common types of conferences include: Academic conferences.
    </h1>
    <hr className="border-1 border-black mt-2" />
    <h1 className="font-bold text-2xl md:text-4xl text-center mt-2">Topic Discussing</h1>
    <ul className="mt-3 text-sm md:text-base">
      <li className="mt-3">Startup Idea</li>
      <li className="mt-3">Financial Stability</li>
      <li className="mt-3">Version of 2026</li>
      <li className="mt-3">User Experience</li>
    </ul>
  </div>
</div>
<div className="flex justify-center mt-14">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-light-blue-300 mx-4 md:mx-14 py-5 px-4 md:px-16 rounded-md text-white">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl md:text-6xl">222</h1>
      <p className="mt-2 md:mt-7 text-sm md:text-base">Days</p>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl md:text-6xl">09</h1>
      <p className="mt-2 md:mt-7 text-sm md:text-base">Hours</p>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl md:text-6xl">03</h1>
      <p className="mt-2 md:mt-7 text-sm md:text-base">Minutes</p>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl md:text-6xl">43</h1>
      <p className="mt-2 md:mt-7 text-sm md:text-base">Seconds</p>
    </div>
  </div>
</div>
<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-12">
  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/27086297/pexels-photo-27086297/free-photo-of-a-woman-sitting-at-the-table-and-using-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt=""
      className="w-full sm:w-[250px] lg:w-[300px] h-[30vh] sm:h-[35vh] lg:h-[40vh] rounded-md"
    />
    <h1 className="text-center text-lg sm:text-xl mt-2">Sandra Wood</h1>
    <p className="text-center text-sm sm:text-base font-body">
      I recommend this web App. It is safe and makes planning your schedules easy.
    </p>
  </div>
  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg"
      alt=""
      className="w-full sm:w-[250px] lg:w-[300px] h-[30vh] sm:h-[35vh] lg:h-[40vh] rounded-md"
    />
    <h1 className="text-center text-lg sm:text-xl mt-2">Richard Brad</h1>
    <p className="text-center text-sm sm:text-base font-body">
      I recommend this web App. It is safe and makes planning your schedules easy.
    </p>
  </div>
  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/6615080/pexels-photo-6615080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt=""
      className="w-full sm:w-[250px] lg:w-[300px] h-[30vh] sm:h-[35vh] lg:h-[40vh] rounded-md"
    />
    <h1 className="text-center text-lg sm:text-xl mt-2">Marcos Wayeh</h1>
    <p className="text-center text-sm sm:text-base font-body">
      I recommend this web App. It is safe and makes planning your schedules easy.
    </p>
  </div>
</div>
<div className="flex justify-center mt-14">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Sponsors & Partners</h1>
</div>
<div className="mt-5 flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mx-4 md:mx-12">
    <div className="flex justify-center">
      <img
        src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-creative-event-and-designer-company-logo-design-template-png-image_5510678.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://marketplace.canva.com/EAFFU2qRop8/1/0/1600w/canva-gray-circle-leaf-wedding-event-planner-logo-G5ftfF41WNw.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://t3.ftcdn.net/jpg/05/20/29/16/360_F_520291673_MMciPpcgZIhrtr22YWDwfBcTRduD7qr5.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://images-platform.99static.com//6elmyyXPTEVTftDGsrwk76Z5b80=/606x164:1145x703/fit-in/590x590/99designs-contests-attachments/88/88795/attachment_88795146"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://birdieproducts.com/cdn/shop/products/birdie-media-tournament-logo-02_1800x1800.jpg?v=1654711473"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://udreamevents.com/wp-content/uploads/UDREAM-EVENTS-Logo.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
  </div>
</div><div className="mt-5 flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mx-4 md:mx-12">
    <div className="flex justify-center">
      <img
        src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-creative-event-and-designer-company-logo-design-template-png-image_5510678.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://marketplace.canva.com/EAFFU2qRop8/1/0/1600w/canva-gray-circle-leaf-wedding-event-planner-logo-G5ftfF41WNw.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://t3.ftcdn.net/jpg/05/20/29/16/360_F_520291673_MMciPpcgZIhrtr22YWDwfBcTRduD7qr5.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://images-platform.99static.com//6elmyyXPTEVTftDGsrwk76Z5b80=/606x164:1145x703/fit-in/590x590/99designs-contests-attachments/88/88795/attachment_88795146"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://birdieproducts.com/cdn/shop/products/birdie-media-tournament-logo-02_1800x1800.jpg?v=1654711473"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
    <div className="flex justify-center">
      <img
        src="https://udreamevents.com/wp-content/uploads/UDREAM-EVENTS-Logo.jpg"
        alt=""
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-md"
      />
    </div>
  </div>
</div>
<div className="mt-5 flex justify-center relative">
  <img
    src="https://images.pexels.com/photos/6170755/pexels-photo-6170755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt=""
    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
  />
  <div className="absolute top-[20%] sm:top-[25%] md:top-[30%] left-4 sm:left-8 md:left-16 bg-white w-[90%] sm:w-[400px] h-auto p-5 rounded-md shadow-lg shadow-black/30">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
      Hurry Up!
    </h1>
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-2">
      Limited tickets available
    </h1>
    <p className="text-center font-thin mt-4 tracking-widest text-sm sm:text-base">
      To book or plan your event here, make it perfect with us.
    </p>
    <div className="flex justify-center mt-4">
      <Link to="/sign-up">
        <button className="bg-light-blue-500 py-2 px-5 sm:py-3 sm:px-7 text-white rounded-lg hover:shadow-md shadow-black/70 transition duration-200">
          Register
        </button>
      </Link>
    </div>
  </div>
</div>
<div className="mt-[19rem]">
  <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold">Book for Hotels</h1>
  <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 justify-center mt-10">
    {ForHotels.map((Hotels) => {
      return (
        <div
          key={Hotels.Name}
          className="shadow-lg shadow-slate-400 w-[90%] sm:w-[300px] md:w-[340px] h-auto rounded-xl hover:scale-105 duration-300 flex justify-center"
        >
          <div className="flex-col">
            <div>
              <img
                src={Hotels.Image}
                alt=""
                className="w-full h-[30vh] sm:h-[35vh] md:h-[38vh] mt-7 rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-between mt-4 px-4">
              <div className="flex justify-between items-center">
                <h1 className="text-lg sm:text-xl font-bold">{Hotels.Name}</h1>
                <div className="flex text-amber-500 text-lg sm:text-xl">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-center mt-2">{Hotels.Price}</h1>
            </div>
            <div className="flex justify-center mt-4">
              <NavLink to="/log-in">
                <button className="bg-light-blue-500 py-2 px-6 sm:py-3 sm:px-8 text-white rounded-lg hover:shadow-md shadow-black/70 transition duration-200">
                  {Hotels.Order}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

<div className="mt-[6rem]">
  <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold">Book for Tourism</h1>
  <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 justify-center mt-10">
    {ForTourism.map((Truism) => {
      return (
        <div
          key={Truism.Name}
          className="shadow-lg shadow-slate-400 w-[90%] sm:w-[300px] md:w-[340px] h-auto rounded-xl hover:scale-105 duration-300 flex justify-center"
        >
          <div className="flex-col">
            <div>
              <img
                src={Truism.Image}
                alt=""
                className="w-full h-[30vh] sm:h-[35vh] md:h-[38vh] mt-7 rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-between mt-4 px-4">
              <div className="flex justify-between items-center">
                <h1 className="text-lg sm:text-xl font-bold">{Truism.Name}</h1>
                <div className="flex text-amber-500 text-lg sm:text-xl">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-center mt-2">{Truism.Price}</h1>
            </div>
            <div className="flex justify-center mt-4">
              <NavLink to="/log-in">
                <button className="bg-light-blue-500 py-2 px-6 sm:py-3 sm:px-8 text-white rounded-lg hover:shadow-md shadow-black/70 transition duration-200">
                  {Truism.Order}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
            <div className='mt-[6rem]'>
              <h1 className='text-center text-4xl font-serif font-bold'>Book Business Trips</h1>
            <div className='flex flex-wrap gap-10 justify-center mt-10'>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[400px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/133/455/712/Accra-City-Hotel_O/Accra-City-Hotel-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Vicky Hotel</h1>
                         <h1 className=' text-xl font-bold order-1'> $50</h1>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button className='bg-indigo-600 text-white px-10 py-2 rounded-xl hover:bg-sky-700'>
                                Book Now
                            </button>
                        </div>
                      </div>
                </div>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[400px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://hotels.ghlisting.com/wp-content/uploads/2017/11/Pool-Area.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Vicky Hotel</h1>
                         <h1 className=' text-xl font-bold order-1'> $50</h1>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button className='bg-indigo-600 text-white px-10 py-2 rounded-xl hover:bg-sky-700'>
                                Book Now
                            </button>
                        </div>
                      </div>
                </div>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[400px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/449473353.jpg?k=b699573120779c36dd2f8ef865757d159affaa859e232621f732a792ea50b332&o=" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Vicky Hotel</h1>
                         <h1 className=' text-xl font-bold order-1'> $50</h1>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button className='bg-indigo-600 text-white px-10 py-2 rounded-xl hover:bg-sky-700'>
                                Book Now
                            </button>
                        </div>
                      </div>
                </div>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[400px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://mensvic-grand-hotel-accra.booked.net/data/Photos/OriginalPhoto/1360/136068/136068243/Mensvic-Grand-Hotel-Accra-Exterior.JPEG" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Vicky Hotel</h1>
                         <h1 className=' text-xl font-bold order-1'> $50</h1>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button className='bg-indigo-600 text-white px-10 py-2 rounded-xl hover:bg-sky-700'>
                                Book Now
                            </button>
                        </div>
                      </div>
                </div>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[400px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://content.skyscnr.com/available/1594931092/1594931092_WxH.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Vicky Hotel</h1>
                         <h1 className=' text-xl font-bold order-1'> $50</h1>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button className='bg-indigo-600 text-white px-10 py-2 rounded-xl hover:bg-sky-700'>
                                Book Now
                            </button>
                        </div>
                      </div>
                </div>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[400px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/392801643.jpg?k=f2583bd0a635e8b67568423196ccc3f6f892dff381921eeca6f2f44e6cead1fc&o=?s=375x210&ar=16x9" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Vicky Hotel</h1>
                         <h1 className=' text-xl font-bold order-1'> $50</h1>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button className='bg-indigo-600 text-white px-10 py-2 rounded-xl hover:bg-sky-700'>
                                Book Now
                            </button>
                        </div>
                      </div>
                </div>
                
            </div>
            </div>
            <Card7/>
       </div>
  )
}
