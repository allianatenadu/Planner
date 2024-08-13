import { MdOutlineSecurity } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSliders } from "react-icons/fa6";




export default function Icons() {
  return (



    <div className='mt-40 flex justify-center gap-16 mx-40 my-40'>
      <div className='flex justify-center gap-36 ' >
        <div className='flex-row hover:scale-150 transition-all duration-190 ease-linear'>
         <div className="text-3xl flex justify-center mb-4 text-indigo-600">
         <MdOutlineSecurity />       
         </div>
          <h1 className='text-2xl font-bold flex justify-center'>Secure</h1>
          <h1 className=' ml-14 mt-3'>
            we strictly only with vendors that provide top notch security.
          </h1>
            <div className="flex justify-center gap-4">
            <h1 className='mt-3  ml-16 text-xl  text-indigo-700'>Learn more</h1>
            <IoIosArrowRoundForward className="text-4xl mt-[10px]  text-indigo-600" />
            </div>
        </div>
        <div className='flex-row hover:scale-150 transition-all duration-300 ease-linear'>
          <div className="text-3xl flex justify-center mb-4  text-indigo-600">
          <FaHeadset />
          </div>
        <h1 className='text-2xl font-bold flex justify-center ml-7'>24/7  Support</h1>
          <h1 className='  ml-14 mt-3'>
            we strictly only with vendors that provide top notch security.
          </h1>
          <div className="flex justify-center gap-4">
            <h1 className='mt-3  ml-16 text-xl  text-indigo-700'>Learn more</h1>
            <IoIosArrowRoundForward className="text-4xl mt-[10px]  text-indigo-600" />
            </div>
        </div>
        <div className='flex-row hover:scale-150 transition-all duration-300 ease-linear'>
          <div className="text-3xl flex justify-center mb-4  text-indigo-600">
          <FaSliders />
          </div>
        <h1 className='text-2xl font-bold flex justify-center ml-7'>Customizable</h1>
          <h1 className=' ml-14 mt-3'>
            we strictly only with vendors that provide top notch security.
          </h1>
          <div className="flex justify-center gap-4">
            <h1 className='mt-3  ml-16 text-xl  text-indigo-700'>Learn more</h1>
            <IoIosArrowRoundForward className="text-4xl mt-[10px]  text-indigo-600" />
            </div>
        </div>
      </div>
    </div>
  )
}
