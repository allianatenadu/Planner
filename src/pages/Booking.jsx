import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Input } from "@material-tailwind/react";
 

export default function Booking() {

  const hotels = [
    {
      Name: "Kempinski Hotel",
      price: "$100",
      image: "https://www.kempinski.com/var/site/storage/images/4/4/1/3/1573144-1-eng-GB/968e74a83d9a-75399546_4K.jpg",
      Details:"The combination of European luxury, first-class service and local flavours proves to be popular among locals"
    },
    {
      
      Name: "Accra city Hotel",
      price: "$400",
      image: "https://media-cdn.tripadvisor.com/media/photo-p/2c/29/0c/19/accra-city-hoteljpg.jpg",
      Details:"Formed from the merger of distinct settlements around British Fort James, Dutch Fort Crêvecoeur (Ussher Fort), and Danish Fort Christiansborg as Jamestown,"
    },
    {
      
      Name: "Labadi Beach Hotel",
      price: "$100",
      image: "https://labadibeachhotelgh.com/wp-content/uploads/front-v.jpg",
      Details:"Dharampal Satyapal Group is a global conglomerate company founded in 1929 in Chandni Chowk, New Delhi by Lala Dharampal Sugandhi. Dharampal's son, Satyapal,"
    },
    {
      
      Name: "Alisa Hotel",
      price: "$100",
      image: "https://alisa-hotel.accra-hotels-gh.com/data/Photos/OriginalPhoto/5308/530838/530838702/accra-alisa-hotel-photo-24.JPEG",
      Details:"As of December 31, 2020, there were an average of 313.1 rooms per hotel in the upper upscale chain type in the United States. In comparison, hotels"
    },
    {
      
      Name: "Movenpick Hotel",
      price: "$100",
      image: "https://www.accrahotelsnow.com/data/Pics/OriginalPhoto/2717/271741/271741745/pic-movenpick-ambassador-hotel-accra-80.JPEG",
      Details:" The first Ambassador Hotel was established in 1957, as a gift by the United Kingdom to the Ghanaian government, on the attainment of independence."
    },
    {
     
      Name: "La Palm Beach Hotel",
      price: "$100",
      image: "https://www.hotelscombined.ca/himg/da/33/1f/expedia_group-11774-19912745-307012.jpg",
      Details:"The Best Western Royal Beach Hotel was built on a one-acre field in 1866 on the junction between South Parade and St Helens Parade."
    },
  ]

  const [search,setSearch] = useState("")

  const handleSearch=(e)=>{
    e.preventDefault()

    setSearch(e.target.value)
  }

  const filteredHotels = hotels.filter((hotel) =>{
    return hotel.Name.toLowerCase().includes(search.toLowerCase())
  })


  //  for Tourism 
    const  Tourism=[
       {
        Name:"",
        Location:"Mount Afadjato",
        Price:"$50",
        Image:"https://visitghana.com/wp-content/uploads/2019/02/2703_Mt.-Afajato.jpg",
        Details:"When the Ewe people migrated to the area, wild animals have been attacking them and sometimes killing their babies so the people decided fight back "
       },
       {
        Name:"",
        Location:"Larabanga mosque",
        Price:"$50",
        Image:"https://mosqpedia.org/img/cache/largeimage/nyuLkvCn5SBFJKhDYx1X6D2isUyb6LiAFKek3yTZ",
        Details:"The mosque houses a very old Koran which is thought to have been delivered from heaven to an Imam called Bramah, around 1650, after he had prayed hard for a Koran."
       },
       {
        Name:"",
        Location:"Elmina Castle",
        Price:"$50",
        Image:"https://149357548.v2.pressablecdn.com/wp-content/uploads/2011/10/elmina.jpg",
        Details:"Elmina Castle is a historical site, and was a major filming location for Werner Herzog's 1987 drama film Cobra Verde. The castle is recognized by UNESCO "
       },
       {
      
        Location:"Adomi bridge",
        Price:"$50",
        Image:"https://civilengineeringgh.wordpress.com/wp-content/uploads/2015/12/screenshot-9.png",
        Details:"The bridge was officially opened on 25 January 1957 by Kwame Nkrumah, then Prime Minister of the Gold Coast and first President of Ghana."
       },
       {
       
        Location:"Boti Fall",
        Price:"$50",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxefz5kW9mbiw6s2PLbVGNVSdnBNiBGBZlA1hhMfNibwmXFKwd",
        Details:", the Boti falls was found in the forest by a white catholic priest surveying the area. In the 1960's the waterfall was very famousyarn"
       },
       
       {
      
        Location:"Kamkum National park",
        Price:"$50",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a8/38/72/caption.jpg?w=300&h=300&s=1",
        Details:"Kakum National Park is The park's best-known feature is undoubtedly its 7 suspension bridges which form a 333-meter long canopy walkway"
       },       
    ]
//People who  like our Event Planner 

    const People=[
      {
   Name:"Merriam",
   detail:"This web app is Good and I like it   ",
   image:"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png"
      },
      {
        Name:"John wick",
        detail:"This web app is Good and I like it  ",
        image:"https://img.freepik.com/premium-photo/man-wearing-glasses-sits-chair-with-shirt-that-says-he-is-smiling_995407-128970.jpg?size=626&ext=jpg&ga=GA1.2.610418126.1724349891&semt=ais_hybrid"
           },
           {
            Name:"Merriam",
            detail:"This web app is Good and I like it  ",
            image:"https://img.freepik.com/premium-photo/portrait-handsome-black-young-african-businessman-wearing-casual-clothes-outdoors-city_251136-85488.jpg?size=626&ext=jpg&ga=GA1.2.610418126.1724349891&semt=ais_hybrid"
               },
    ]

  return (
    <div >
        <div className='bg-cover bg-center bg-no-repeat bg-[url("https://i.pinimg.com/564x/5f/e8/4b/5fe84b13eda11d3e06c2ad644c0431dc.jpg")] h-[70vh] flex justify-center  w-[100%]' >
         <div className='text-gray-900 font-bold text-xl mt-4'>
            <nav className='flex flex-wrap gap-8'>
               <Link to="/">
               <a href="" className='border-b-4 border-indigo-600 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out'>Home</a>
               </Link>
                <Link to="/booking">
                <a href="" className='border-b-4 border-indigo-600 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out'>Booking</a>
                </Link>
                <Link to="/contact">
                <a href="" className='border-b-4 border-indigo-600 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out'>Contact</a>
                </Link>
                <Link to="/event">
                <a href="" className='border-b-4 border-indigo-600 pb-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out'>Event</a>
                </Link>
            </nav>
         </div>
         <div className="flex justify-center ">
         <div className="flex-col text-black absolute left-[25rem] top-36">
          <h1 className='text-5xl font-bold'>Proxima Event Planner</h1>
                  <h1 className='text-2xl mt-3 min-h-2'>
                    Book your event with us and make it memorable,<br /> we are here to make your event memorable.
                  </h1>
          </div>
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
           
           <div className='mt-10 '>
              <div className="flex-col">
              <h1 className='text-center text-3xl tracking-normal  font-serif font-bold'>Here are some places for you to book Now </h1>
               <div className="flex justify-center">
               <div className="   mt-3 py-10 px-7 bg-gray-200 w-[50rem] h-[20vh]  rounded-lg">
                <Input label="Search Hotel" onChange={handleSearch} />
              </div>
               </div>
            <div className='flex flex-wrap gap-10 justify-center mt-10'>    
           {filteredHotels.map((hotel)=>(
             <div key={hotel.Name} className={`shadow-lg shadow-slate-400  w-[340px] h-[80vh] rounded-xl hover:scale-105 duration-300 flex  justify-center ${search ? "block":"hidden"}`}>
             <div className='flex-col'>
                   <div>
                <img src={hotel.image} alt=""   className='w-[290px] h-[40vh] mt-7 rounded-xl'/>
                   </div>
                    <div className='flex justify-between mt-3'>
                      <h1 className=' text-xl font-bold'>{hotel.Name}</h1>
                      <h1 className=' text-xl font-bold order-1'>{hotel.price}</h1>
                     </div>
                     <div>
                      <p></p>
                     </div>
                     <div className='flex justify-center mt-2'>
                       <Link to="/log-in">
                       <button className='bg-indigo-600 text-white px-10 py-2 rounded-xl hover:bg-sky-700'>
                             Book Now
                         </button>
                       </Link>
                     </div>
                   </div>
             </div>
          
           ))}
                
            </div>
              </div>


              <h1 className="text-center text-3xl font-serif font-semibold my-4">For Hotels</h1>
         <div className="flex justify-center ">
            <div className="flex justify-center gap-x-4 gap-y-4 flex-wrap">
                 {hotels.map((hotel)=>{
                    return(
                      <div className="bg-gray-100 h-[80vh] w-[340px] rounded-lg px-6 py-6  ">
                      <img src={hotel.image} alt=""  className="h-[38vh] w-[33rem]   rounded-lg"  />
                      <div className="flex justify-evenly mt-4 font-semibold font-serif">
                        <h1>{hotel.Name}</h1>
                        <h1>{hotel.price}</h1>
                      </div>
                      <p className="font-thin">{hotel.Details}</p>
                        <div className=" flex justify-center">
                         <Link to="/log-in">
                         <button className="bg-black text-white py-2 px-11 rounded-lg mt-3">
                              Booking
                          </button>
                         </Link>
                        </div>
                </div>
                    ); 
                 })}
            </div>
         </div>        

         </div>
       {/* Cards for event planner for Tourism */}
        <h1 className="text-center text-3xl font-serif font-semibold my-6">For Tourism </h1>
         <div className="flex justify-center mt-[4rem] ">
            <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
                 {Tourism.map((Tour)=>{
                    return(
                      <div className="bg-gray-100 h-[80vh] w-[340px] rounded-lg px-6 py-6  ">
                      <img src={Tour.Image} alt=""  className="h-[38vh] w-[33rem]   rounded-lg"  />
                      <div className="flex justify-evenly mt-4 font-semibold font-serif">
                        <h1>{Tour.Location}</h1>
                        <h1>{Tour.Price}</h1>
                      </div>
                      <p className="font-thin">{Tour.Details}</p>
                        <div className=" flex justify-center">
                        <button  className="bg-black text-white py-2 px-11 rounded-lg mt-3">Booking</button>
                        </div>
                </div>
                    ); 
                 })}
            </div>
         </div>


         <h1 className="text-center my-5 font-serif font-semibold text-3xl mt-[7rem]">People Who recommended on our Event Planner </h1>
         <div className="flex justify-center mt-[6rem] ">
            <div className="flex justify-center gap-x-4 gap-y-4 flex-wrap">
                 {People.map((Tour)=>{
                    return(
                      <div className=" h-[60vh] w-[340px] rounded-lg px-6 py-6 text-center  ">
                      <img src={Tour.image} alt=""  className="h-[38vh] w-[33rem]   object-center  rounded-lg"  />
                        <h1>{Tour.Name}</h1>
                      <p className="font-thin">{Tour.detail}</p>
                </div>
                    ); 
                 })}
            </div>
         </div>
               
             

  <div className='mt-14'>
  <div className=" bg-black h-[80vh] flex justify-center">
      <div className="mt-28 text-white">
      <div className='flex justify-evenly mt-5 items-center'>
              <h1 className='bg-indigo-500 px-4 py-4 text-xl font-bold text-white rounded-tl-[2rem] rounded-br-[2rem] '>Proxi</h1>
              <h1 className='font-bold text-4xl  font-sans mt-1 '>Proxima</h1>
            </div>
            <div className='flex justify-center font-sans gap-16 text-[17px] mt-10'>
             <Link to="/"><a href="">Home</a></Link>
              <Link to="/booking"><a href="">Booking</a></Link>
              <Link to="/contact"><a href="">Contact</a></Link>
              <Link to="/event">
             <a href=""  className="hover:border-b-4 border-solid border-blue-700">Event</a>
             </Link >
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
            <div className="mt-11 flex justify-center">
                <h1>&copy; copyright 2024, Traect Tech. All right reserved </h1>
              </div>  
      </div>
    </div>
  </div>
    </div>
  )
}
