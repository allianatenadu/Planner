import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className='bg-cover bg-no-repeat bg-center min-h-screen w-screen flex justify-center items-center' 
      style={{backgroundImage: "url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      
      <div className='backdrop-blur-sm bg-blue-gray-400/45 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl 
        w-full max-w-4xl h-auto sm:h-[90vh]'>
        
        <h1 className='text-3xl sm:text-4xl text-center text-white font-serif tracking-wide font-bold'>
          Proxima
        </h1>
        <p className='text-lg sm:text-xl text-white text-center mt-2'>
          Fill out the form to contact us now
        </p>

        <div className='flex justify-center mt-10'>
          <form className='flex flex-wrap gap-6 sm:gap-8 justify-center items-center w-full'>
            
            <div className='bg-white w-[90%] sm:w-[19rem] h-[9vh] rounded-md flex justify-evenly items-center mb-4'>
              <input type="text" placeholder='Your Name' required className='w-[80%] sm:w-[11rem] h-[5vh] outline-none'/>
              <GoPerson className="text-2xl font-bold"/>
            </div>

            <div className='bg-white w-[90%] sm:w-[19rem] h-[9vh] rounded-md flex justify-evenly items-center mb-4'>
              <input type="text" placeholder='Your Surname' required className='w-[80%] sm:w-[11rem] h-[5vh] outline-none'/>
              <GoPerson className="text-2xl font-bold"/>
            </div>

            <div className="bg-white w-[90%] sm:w-[19rem] h-[9vh] rounded-md flex justify-center items-center mb-4">
              <input type="email" placeholder="Email" required className="w-[80%] sm:w-[11rem] h-[5vh] outline-none"/>
            </div>

            <div className="bg-white w-[90%] sm:w-[19rem] h-[9vh] rounded-md flex justify-center items-center mb-4">
              <input type="number" placeholder="Phone Number" required className="w-[80%] sm:w-[11rem] h-[5vh] outline-none"/>
            </div>

            <div className="bg-white w-full sm:w-[39rem] h-[25vh] rounded-md flex flex-col justify-center items-center mb-4">
              <h1 className="font-bold my-2 font-serif">Any Question you want to ask</h1>
              <textarea placeholder="Type your message here" className="w-[90%] sm:w-[32rem] p-3 h-[16vh] rounded-md border-2 border-solid border-gray-700 outline-none" />
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center items-center gap-4 sm:gap-6 w-full">
              <button type="submit" className="bg-black text-white text-xl font-bold w-full sm:w-[20rem] h-[9vh] rounded-xl hover:bg-light-blue-300">
                Contact Us
              </button>
              <Link to="/">
                <a href="" className="text-white text-center sm:text-left">Go back home</a>
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
