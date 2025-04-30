import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card5() {
  return (
    <div className="mt-36 px-4">
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-auto max-w-7xl">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl">Testimonials</h1>
          <p className="mt-4 text-base md:text-xl text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem atque laudantium qui inventore quae, corrupti, voluptates, soluta perspiciatis provident totam pariatur iusto? Libero vero cupiditate odio ullam optio dolore alias!
          </p>

          <FaQuoteLeft className="mt-4 text-2xl md:text-3xl text-indigo-600" />
          <p className="mt-3 text-base md:text-xl indent-8 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam iste libero repellendus delectus ullam quas maxime magni. Error perspiciatis quaerat impedit modi consequatur ab atque doloribus libero et laboriosam.
          </p>
          <FaQuoteRight className="mt-3 text-2xl md:text-3xl text-indigo-600" />

          {/* Author Info */}
          <div className="mt-6 flex items-center gap-4">
            <img
              src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4="
              alt="Bismark"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-bold text-lg">Bismark</h2>
              <p className="text-sm text-gray-500">Japans</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://tropicalnorthqueensland.org.au/wp-content/uploads/Millaa-Millaa-Falls-Atherton-Tablelands.jpg"
            alt="Waterfall"
            className="w-full max-w-md h-auto md:h-[80vh] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Card5;
