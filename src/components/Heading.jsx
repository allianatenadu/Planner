import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-[88vh] w-[100%]" style={{backgroundImage: 'url("https://images.pexels.com/photos/26691733/pexels-photo-26691733/free-photo-of-close-up-of-a-jellyfish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',}}>
      <div className="flex justify-between gap-12 mx-16 ">
          <div className="flex justify-center gap-12 ">
          <div className='flex  gap-x-6 justify-evenly mt-5 items-center'>
              <h1 className='bg-indigo-500 px-4 py-4 text-xl font-bold text-white rounded-tl-[2rem] rounded-br-[2rem] '>Proxi</h1>
              <h1 className='font-bold text-2xl  font-sans mt-1 text-white '>Proxima </h1>
            </div>
            <div className="flex justify-center text-white font-sans gap-x-5 text-[17px] mt-10">
              <Link to="/">
              <a href="" className="hover:border-b-4 border-solid border-blue-700">Home</a>
              </Link>
             <Link to="/booking" >
             <a href=""  className="hover:border-b-4 border-solid border-blue-700">Booking</a>
             </Link>
             <Link to="/contact">
             <a href=""  className="hover:border-b-4 border-solid border-blue-700">Contact</a>
             </Link >
             <Link to="/event">
            < div  className="py- hover:border-b-4 border-solid border-blue-700 ">
            <a href="">Event</a>  
             </div>
             </Link >
             <Link to="/services">
             <a href=""  className="hover:border-b-4 border-solid border-blue-700">Services</a>
             </Link>
            </div>
          </div>
            <div className="flex justify-center gap-6 mt-8">
              <Link
                className="bg-blue-700 px-7 py-3 rounded text-lg text-white hover:bg-blue-800  text-center"
                to="/sign-up"
              >
                Sign Up
              </Link>

              <Link
                className="bg-gray-600 text-white px-7 py-3 rounded text-lg  hover:bg-slate-500  text-center"
                to="/log-in"
              >
                logIn
              </Link>
            </div>
          </div>
        </div>
      

  );
}
