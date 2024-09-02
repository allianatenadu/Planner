import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className='bg-cover bg-no-repeat bg-center min-h-screen w-screen flex justify-center items-center' style={{backgroundImage: "url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
           <div className=' backdrop-blur-sm bg-blue-gray-400/45 p-10 rounded-lg shadow-2xl 
            w-[800px] h-[87vh]'>
            <h1 className='text-4xl text-center text-white font-serif tracking-wide font-bold'>
              Proxima
              </h1>
              <p className='text-xl text-white text-center'>Fill out the form to contact us now</p>
              <div className='flex justify-center  mt-10'>
            <form className=' flex flex-wrap gap-4 justify-center items-center'>
            <div className='bg-white w-[19rem] h-[9vh] rounded-md  flex justify-evenly items-center'>
              <input type="text" placeholder='Your Name' required className='w-[11rem] h-[5vh] outline-none'/>
              <GoPerson  className="text-2xl font-bold"/>
            </div>
            <div className='bg-white w-[19rem] h-[9vh] rounded-md flex justify-evenly items-center'>
            <input type="text" placeholder='Your Surname' required className='w-[11rem] h-[5vh] outline-none'/>
            <GoPerson  className="text-2xl font-bold"/>
            </div>
            <div className="bg-white w-[19rem] h-[9vh] rounded-md flex justify-center items-center " >
            <input type="email"  placeholder=" Email" required  className="w-[11rem] h-[5vh]  outline-none"/>
            </div>
            <div className="bg-white w-[19rem] h-[9vh] rounded-md flex justify-center items-center" >
             <input type="number"  placeholder="Phone Number" required className="w-[11rem] h-[5vh] "/>
            </div>
            <div className="bg-white w-[39rem] h-[25vh] rounded-md flex flex-col justify-center items-center" >
             <h1 className="font-bold my-2 font-serif font-bold">Any Question you want to ask</h1>
             <textarea placeholder="Type your message here" className="w-[32rem] p-3 h-[16vh] rounded-md border-2 border-solid border-gray-700 outline-none "></textarea>
            </div>
           <div className="flex justify-evenly items-center gap-[4rem]">
           <button type="submit " className="bg-black text-white text-2xl font-bold w-[20rem] ml-[14rem] h-[9vh] rounded-md hover:bg-blue-600">
              Contact Us
            </button>
            <Link to="/">
              <a href="" className="text-white"> Go back home</a>
            </Link>
           </div>
            </form>
           </div>
           </div>
    </div>
  )
}
