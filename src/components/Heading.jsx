import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div className="bg-slate-100">
      <div className="flex justify-center gap-12 ">
        <div>
          <div className="flex justify-center gap-12 ">
            <div className="flex gap-3 justify-center mt-5 ml-9">
              <h1 className="bg-indigo-500 p-2 w-[35px] text-3xl h-[48px] font-bold text-white rounded ">
                T
              </h1>
              <h1 className="font-bold text-4xl  font-sans mt-1 ">Treact</h1>
            </div>
            <div className="flex justify-center font-sans gap-9 text-[17px] mt-8">
              <a href="">Home</a>
              <a href="">Booking</a>
              <a href="">Contact</a>
              <a href="">Services</a>
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
              <button className="bg-slate-300 p-3 w-[13rem] h-[9vh] rounded text-lg  hover:bg-slate-500  ">
                Search hotels
              </button>
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
