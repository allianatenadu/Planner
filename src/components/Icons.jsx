import { MdOutlineSecurity } from "react-icons/md";
import { FaHeadset, FaSliders } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Icons() {
  return (
    <div className='mt-20 px-4 sm:px-10 md:px-20 lg:px-40'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
        {/* Card 1 */}
        <div className='flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-linear max-w-sm'>
          <div className="text-4xl text-indigo-600 mb-4">
            <MdOutlineSecurity />
          </div>
          <h1 className='text-2xl font-bold'>Secure</h1>
          <p className='mt-3 text-gray-700'>
            We strictly only work with vendors that provide top notch security.
          </p>
          <div className="flex items-center gap-2 mt-4 text-indigo-700">
            <span className='text-xl'>Learn more</span>
            <IoIosArrowRoundForward className="text-3xl" />
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-linear max-w-sm'>
          <div className="text-4xl text-indigo-600 mb-4">
            <FaHeadset />
          </div>
          <h1 className='text-2xl font-bold'>24/7 Support</h1>
          <p className='mt-3 text-gray-700'>
            We strictly only work with vendors that provide top notch security.
          </p>
          <div className="flex items-center gap-2 mt-4 text-indigo-700">
            <span className='text-xl'>Learn more</span>
            <IoIosArrowRoundForward className="text-3xl" />
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-linear max-w-sm'>
          <div className="text-4xl text-indigo-600 mb-4">
            <FaSliders />
          </div>
          <h1 className='text-2xl font-bold'>Customizable</h1>
          <p className='mt-3 text-gray-700'>
            We strictly only work with vendors that provide top notch security.
          </p>
          <div className="flex items-center gap-2 mt-4 text-indigo-700">
            <span className='text-xl'>Learn more</span>
            <IoIosArrowRoundForward className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
