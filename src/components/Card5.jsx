import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Card5() {
  return (
    <div className="mt-36">
       <div className="flex justify-center gap-6 mx-16 my-16">
        <div className=" w-[670px] ">
         <h1 className="font-bold text-4xl">Testimonials</h1>
         <h1 className="mt-4 text-xl text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem atque laudantium qui inventore quae, corrupti, voluptates, soluta perspiciatis provident totam pariatur iusto? Libero vero cupiditate odio ullam optio dolore alias!
         </h1>
         <FaQuoteLeft className="mt-4 text-3xl text-indigo-600" />
         <h1 className="mt-3 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam iste libero repellendus delectus ullam quas maxime magni. Error perspiciatis quaerat impedit modi consequatur ab atque doloribus libero et laboriosam.
         </h1>
         <FaQuoteRight className="mt-3 text-3xl text-indigo-600" />
         <div className="mt-5 flex justify-center gap-3 mr-[28rem]">
          <div>
          <img src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4=" alt="" className=" w-[70px] h-[70px] rounded-[4rem] " />
          </div>
          <div className="mt-3">
            <h1 className=" font-bold ">Bismark </h1>
            <h1>Japans</h1>
          </div>
         </div>
        </div>
        <div className=" w-[580px] ">
         <img src="https://tropicalnorthqueensland.org.au/wp-content/uploads/Millaa-Millaa-Falls-Atherton-Tablelands.jpg" alt="" className=" w-[440px] h-[100vh] rounded-2xl " />
        </div>
       </div>
    </div>
  )
}

export default Card5
