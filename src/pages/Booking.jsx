import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from "@material-tailwind/react";
 

export default function Booking() {
  return (
    <div>
        <div className='bg-cover bg-center bg-no-repeat h-[70vh] flex justify-center  w-[100%]' style={{
        backgroundImage: 'url("https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}>
         <div className='text-white text-xl mt-4'>
            <nav className='flex flex-wrap gap-8'>
               <Link to="/">
               <a href="" className='hover:border-b-4 border-indigo-900 font-bold'>Home</a>
               </Link>
                <Link to="/booking">
                <a href="" className='hover:border-b-4 border-indigo-900 font-bold'>Booking</a></Link>
                <Link to="/contact">
                <a href="" className='hover:border-b-4 border-indigo-900 font-bold'>Contact</a>
                </Link>
                <Link to="/services">
                <a href="" className='hover:border-b-4 border-indigo-900 font-bold'>Services</a>
                </Link>
            </nav>
         </div>
           <div className='absolute top-[10rem] left-[23rem] '>
           <h1 className='text-white text-4xl font-serif tracking-normal font-bold inline `' >Welcome guest, Please can we help you</h1>
           </div>
        </div>
        <div className='mx-20 mt-14'>
  <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="image 1"
        className="h-[78vh] w-full object-cover"
      />
      <img
        src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg"
        alt="image 2"
        className="h-[78vh] w-full object-cover"
      />
      <img
        src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="image 3"
        className="h-[78vh] w-full object-cover"
      />
    </Carousel>
  </div>
         <div className='mt-10'>
            <h1 className='text-center text-3xl tracking-normal  font-serif font-bold'>Here are some places for you to book Now </h1>
            <div className='flex flex-wrap gap-10 justify-center mt-10'>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://pix10.agoda.net/hotelImages/1197777/-1/245605c91c82de6a73b70e04881c71f1.jpg?ca=20&ce=0&s=414x232&ar=16x9" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://media.iceportal.com/47530/photos/3764856_XL/Best-Western-Premier-Accra-Airport-Hotel-Other.jpg?tr=w-780%2Ch-437%2Cfo-auto" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300  flex  justify-center'>
                      <div className='flex-col'>
                      <div>
                       <img src="https://ghanatalksbusiness.com/wp-content/uploads/2018/09/lome-hotel-ibis.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400 w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/de/dd/22/photo2jpg.jpg?w=1200&h=-1&s=1" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://royal-nick-hotel-accra-gh.booked.net/data/Photos/OriginalPhoto/1112/111260/111260457/Royal-Nick-Hotel-Accra-Exterior.JPEG" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://media-cdn.tripadvisor.com/media/photo-s/23/10/a6/ae/our-inviting-pool.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400 w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://bestwesternplusaccra.com/client-assets/img/bwp-4.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://cdn.yen.com.gh/images/1120/3o3bpd6hfe1socoeh.jpeg?v=1" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://images.trvl-media.com/lodging/98000000/97010000/97006400/97006372/a910413f_z.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
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
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
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
  <div className='mt-14'>
  <div className=" bg-cyan-900 h-[80vh] flex justify-center">
      <div className="mt-28 text-white">
      <div className='flex justify-evenly mt-5 items-center'>
              <h1 className='bg-indigo-500 px-4 py-4 text-xl font-bold text-white rounded-tl-2xl rounded-br-2xl '>Proxi</h1>
              <h1 className='font-bold text-4xl  font-sans mt-1 '>Proxima</h1>
            </div>
            <div className='flex justify-center font-sans gap-16 text-[17px] mt-6'>
             <Link to="/"><a href="">Home</a></Link>
              <Link to="/booking"><a href="">Booking</a></Link>
              <Link to="/contact"><a href="">Contact</a></Link>
              <Link to="/services"><a href="">services</a></Link>
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
  </div>
    </div>
  )
}
