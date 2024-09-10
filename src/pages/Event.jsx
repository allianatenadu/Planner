import React from 'react'
import { Link } from 'react-router-dom'
import Card7 from '../components/Card7'

export default function Event() {
  return (
        <div>  
            <div className='bg-cover bg-center flex justify-center bg-no-repeat h-[88vh] w-[100%] relative' style={{backgroundImage: 'url("https://images.pexels.com/photos/7269212/pexels-photo-7269212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',}}>
              <div className='flex justify-center mt-10   text-yellow-800 font-bold gap-x-20'>
                <Link to="/" className=' text-lg  text-center'>Home</Link>
                <Link to="/booking"className=' text-lg text-center'>Book</Link>
                <Link to="/contact" className=' text-lg text-center'>Contact</Link>
                <Link to="/event" className=' text-lg text-center'>Event</Link>
                <Link to="/services"className=' text-lg    text-center'>Services</Link>
              </div>
              <div className='absolute mt-32 text-white '>
                  <h1 className='text-5xl font-bold'>Proxima Event Planner</h1>
                  <h1 className='text-2xl mt-5 min-h-2'>
                    Book your event with us and make it memorable,<br /> we are here to make your event memorable.
                  </h1>
                 <div className='flex justify-evenly mt-5'>
                <Link to="/sign-up">
                <button className='bg-cyan-600 px-14 py-3 mt-5 rounded-lg text-white '>
                    SinUp
                  </button>
                </Link>
                 <Link to="/log-in">
                 <button className='bg-white px-14 py-3 mt-5 rounded-lg text-black  '>
                    LogIn
                  </button> 
                 </Link>
                 </div>
              </div>
           </div>
           <div className='flex justify-evenly mx-12 mt-14  '>
             <div className='p-3 '>
              <img src="https://images.pexels.com/photos/27086164/pexels-photo-27086164/free-photo-of-three-women-sitting-at-a-table-with-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[400px] h-[70vh] rounded-md ' />
             </div>
             <div>
              <h1 className='text-3xl font-bold'>Conference meeting </h1>
              <h1 className='tracking-tighter mt-3'>
              conference is an event where a number of people come together to discuss a particular subject <br />  or share information. Conferences can last for one day, <br />or be held over several days, depending on the size and scope of the event.<br /> Common types of conferences include: Academic conferences.
              </h1>
              <hr className='border-1 border-black mt-2'/>
              <h1 className='font-bold text-4xl text-center mt-2'>Topic Discussing</h1>
              <ul className='mt-3'>
                <li className='mt-3'> Startup Idea</li>
                <li className='mt-3'>Finical Stability</li>
                <li className='mt-3'>Version of 2026</li>
                <li className='mt-3'>User Experience</li>
              </ul>
             </div>
           </div>
          <div className='flex justify-center mt-14'>
            <div className='col-span-2 flex justify-between gap-x-6 bg-light-blue-300 mx-14 py-5 px-[16rem] rounded-md text-white  '>
              <div className='flex justify-center gap-x-1 items-center'>
              <h1 className='font-bold text-6xl'>222</h1>
              <p className='mt-7'>Days</p>
              </div>
              <div className='flex justify-center gap-x-1 items-center'>
              <h1 className='font-bold text-6xl'>09</h1>
              <p className='mt-7'>Hours</p>
              </div>
              <div className='flex justify-center gap-x-1 items-center'>
              <h1 className='font-bold text-6xl'>03</h1>
              <p className='mt-7'>minutes</p>
              </div>
              <div className='flex justify-center gap-x-1 items-center'>
              <h1 className='font-bold text-6xl'>43</h1>
              <p className='mt-7'>seconds</p>
              </div>
            </div>
           </div>
            <div className='mt-14 grid grid-cols-6 gap-x-10 mx-[13rem] '>
              <div className='col-span-2  '>
                  <img src="https://images.pexels.com/photos/27086297/pexels-photo-27086297/free-photo-of-a-woman-sitting-at-the-table-and-using-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[300px] h-[40vh] rounded-md ' />
                  <h1 className='text-center text-xl'>Sandra wood</h1>
                  <p className='text-center font-body'>
                  I recommend this web App . it save and it makes planning your schedules easy
                  </p>
              </div>
              <div className='col-span-2 '>
              <img src="https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg" alt="" className='w-[300px] h-[40vh] rounded-md ' />
              <h1 className='text-center text-xl'>Richard brad</h1>
              <p className='text-center font-body'>
              I recommend this web App . it save and it makes planning your schedules easy
              </p>
              </div>
              <div className='col-span-2 '>
              <img src="https://images.pexels.com/photos/6615080/pexels-photo-6615080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[300px] h-[40vh] rounded-md ' />
              <h1 className='text-center text-xl'>Marcos wayeh</h1>
              <p className='text-center font-body'>
                 I recommend this web App . it save and it makes planning your schedules easy
              </p>
              </div>
            </div>
            <div className='flex justify-center mt-14'>
              <h1 className='text-4xl font-bold'>Sponsers & Partners</h1>
            </div>
            <div className=' mt-5 flex justify-center'>
              <div className='flex flex-wrap gap-x-10 mx-[13rem] '>
                 <div className=''>
                   <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-creative-event-and-designer-company-logo-design-template-png-image_5510678.jpg" alt="" className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                   <img src="https://marketplace.canva.com/EAFFU2qRop8/1/0/1600w/canva-gray-circle-leaf-wedding-event-planner-logo-G5ftfF41WNw.jpg" alt="" className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                  <img src="https://t3.ftcdn.net/jpg/05/20/29/16/360_F_520291673_MMciPpcgZIhrtr22YWDwfBcTRduD7qr5.jpg" alt=""  className='w-[100px] h-[100px] rounded-md '  />
                 </div>
                 <div className=''>
                  <img src="https://images-platform.99static.com//6elmyyXPTEVTftDGsrwk76Z5b80=/606x164:1145x703/fit-in/590x590/99designs-contests-attachments/88/88795/attachment_88795146" alt=""className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                  <img src="https://birdieproducts.com/cdn/shop/products/birdie-media-tournament-logo-02_1800x1800.jpg?v=1654711473" alt=""className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                  <img src="https://udreamevents.com/wp-content/uploads/UDREAM-EVENTS-Logo.jpg" alt="" className='w-[100px] h-[100px] rounded-md ' />
                 </div>
              </div>
            </div>
            <div className=' mt-5 flex justify-center'>
              <div className='flex flex-wrap gap-x-10 mx-[13rem] '>
                 <div className=''>
                   <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-creative-event-and-designer-company-logo-design-template-png-image_5510678.jpg" alt="" className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                   <img src="https://marketplace.canva.com/EAFFU2qRop8/1/0/1600w/canva-gray-circle-leaf-wedding-event-planner-logo-G5ftfF41WNw.jpg" alt="" className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                  <img src="https://t3.ftcdn.net/jpg/05/20/29/16/360_F_520291673_MMciPpcgZIhrtr22YWDwfBcTRduD7qr5.jpg" alt=""  className='w-[100px] h-[100px] rounded-md '  />
                 </div>
                 <div className=''>
                  <img src="https://images-platform.99static.com//6elmyyXPTEVTftDGsrwk76Z5b80=/606x164:1145x703/fit-in/590x590/99designs-contests-attachments/88/88795/attachment_88795146" alt=""className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                  <img src="https://birdieproducts.com/cdn/shop/products/birdie-media-tournament-logo-02_1800x1800.jpg?v=1654711473" alt=""className='w-[100px] h-[100px] rounded-md ' />
                 </div>
                 <div className=''>
                  <img src="https://udreamevents.com/wp-content/uploads/UDREAM-EVENTS-Logo.jpg" alt="" className='w-[100px] h-[100px] rounded-md ' />
                 </div>
              </div>
            </div>
            <div className=' mt-5 flex justify-center'>
              <img src="https://images.pexels.com/photos/6170755/pexels-photo-6170755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
              className='w-[100%] h-[60vh] absolute ' />
              <div className='relative top-[3.22rem] left-[30px] bg-white w-[400px] h-[40vh]  p-5  rounded-md shadow-lg shadow-black/30'>
              <h1 className='text-3xl font-bold text-center '>
                  Harry Up !
                </h1>
                <h1 className='text-3xl font-bold text-center '>
                  Limited ticket available
                </h1>
                <p className='text-center font-thin mt-4 tracking-widest'>To book or plan your event here. to make your perfect </p>
                 <div className='flex justify-center mt-2'>
                 <Link to="/sign-up">
                 <button className='bg-light-blue-500 py-3 px-7 text-white rounded-lg mt-2 hover:shadow-md shadow-black/70 delay-200'>
                 Register 
                 </button>
                 </Link>
                 </div>
              </div>
            </div>
            <div className='mt-[16rem]'>
              <h1 className='text-center text-4xl font-serif font-bold'>Book for hotels</h1>
            <div className='flex flex-wrap gap-10 justify-center mt-10'>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/133/455/712/Accra-City-Hotel_O/Accra-City-Hotel-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Accra city Hotel</h1>
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
                         <h1 className=' text-xl font-bold'>Zenobia Hotel</h1>
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
                         <h1 className=' text-xl font-bold'>Luke Hotel</h1>
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
                         <h1 className=' text-xl font-bold'>Rico Hotel</h1>
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
                         <h1 className=' text-xl font-bold'>Vibrant Hotel</h1>
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
                         <h1 className=' text-xl font-bold'>Mack brown Hotel</h1>
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
            <div className='mt-[6rem]'>
              <h1 className='text-center text-4xl font-serif font-bold'>Book for Tourism</h1>
            <div className='flex flex-wrap gap-10 justify-center mt-10'>
                <div className='shadow-lg shadow-slate-400  w-[340px] h-[300px] rounded-xl hover:scale-105 duration-300 flex  justify-center'>
                <div className='flex-col'>
                      <div>
                       <img src="https://media.timeout.com/images/106038560/750/422/image.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Niagara Falls</h1>
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
                       <img src="https://static.javatpoint.com/top10-technologies/images/top-10-tourist-places-in-world3.png" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Colosseuml</h1>
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
                       <img src="https://www.planetware.com/wpimages/2022/02/world-top-rated-tourist-attractions-chichen-itza-mexico.jpg" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Chichén Itzá</h1>
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
                       <img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQtD6wDe5ZPFJOLYP_lGrJXc9Sb5J8tx4kSJTokmzh-fRUJgoeaPDzko2JpfkmjiRbm" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>The Monasteryl</h1>
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
                       <img src="https://www.holidify.com/images/cmsuploads/compressed/Machu_Picchu_early_morning_20181214131409.JPG" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>
                         Historic Sanctuary 
                         </h1>
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
                       <img src="https://www.usnews.com/object/image/00000180-6260-d187-a5cb-fefd67170001/eiffel-tower-outro-stock.jpg?update-time=1650917926219&size=responsive640" alt=""   className='w-[240px] h-[30vh] mt-7 rounded-xl'/>
                      </div>
                       <div className='flex justify-between mt-3'>
                         <h1 className=' text-xl font-bold'>Eiffel Tower</h1>
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
            <div className='mt-[6rem]'>
              <h1 className='text-center text-4xl font-serif font-bold'>Book Business Trips</h1>
            <div className='flex flex-wrap gap-10 justify-center mt-10'>
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
            <Card7/>
       </div>
  )
}
