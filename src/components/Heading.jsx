import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div className="bg-slate-100">
      <div className="flex justify-center gap-12 ">
        <div>
          <div className="flex justify-center gap-12 ">
          <div className='flex  gap-3 justify-evenly mt-5 items-center'>
              <h1 className='bg-indigo-500 px-4 py-4 text-xl font-bold text-white rounded-tl-2xl rounded-br-2xl '>Proxi</h1>
              <h1 className='font-bold text-2xl  font-sans mt-1 '>Proxima </h1>
            </div>
            <div className="flex justify-center font-sans gap-9 text-[17px] mt-10">
              <Link to="/">
              <a href="" className="hover:border-b-4 border-solid border-blue-700">Home</a>
              </Link>
             <Link to="/booking" >
             <a href=""  className="hover:border-b-4 border-solid border-blue-700">Booking</a>
             </Link>
             <Link to="/contact">
             <a href=""  className="hover:border-b-4 border-solid border-blue-700">Contact</a>
             </Link >
             <Link to="/services">
             <a href=""  className="hover:border-b-4 border-solid border-blue-700">Services</a>
             </Link>
            </div>
          </div>
          <div className="flex-row mt-24">
            <div className="flex-row ">
              <h1 className="text-6xl flex justify-center font-bold text-blue-950 font-sans ">
                Find Perfect Hotels
              </h1>
              <h1 className="text-6xl flex justify-center font-bold text-blue-500 font-sans ">
                anywhere you go.
              </h1>
            </div>
            <div className="mt-7 flex   font-extralight ml-5 text-xl">
              <p>
                We have been in the hotels business across the world for 5 years
                now. We assure you that you will always enjoy your stay with us.
              </p>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <Link
                className="bg-blue-700 p-3 w-[13rem] h-[9vh] rounded text-lg text-white hover:bg-blue-800  text-center"
                to="/sign-up"
              >
                Sign Up
              </Link>

              <Link
                className="bg-gray-600 text-white p-3 w-[13rem] h-[9vh] rounded text-lg  hover:bg-slate-500  text-center"
                to="/log-in"
              >
                logIn
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/06/GettyImages-1131484938.jpg"
            alt=""
            className="w-[1090px] h-[600px] "
          />
        </div>
      </div>
    </div>
  );
}
