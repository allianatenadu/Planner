import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-screen "
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=22")',
      }}
    >
      <div className="text-black flex justify-center  ">
        <div className="backdrop-blur-lg w-[470px] h-[76vh]  rounded-xl p-4">
          <Link
            to="/login"
            className="mt-3 text-4xl text-center text-white font-bold"
          >
            Login
          </Link>
          <div className="flex justify-center">
            <div className="flex-col ">
              <form>
                <div className="border-b-2 border-solid border-white w-[340px] h-[8vh]  mt-3  flex justify-between ">
                  <input
                    type="text"
                    placeholder="Frist Name"
                    required
                    className="text-center bg-transparent text-black mt-4 outline-none"
                  />
                  <IoMdPerson className="text-2xl text-black mt-5" />
                </div>
                <div className="border-b-2 border-solid border-white w-[340px] h-[8vh]  mt-6  flex justify-between ">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="text-center bg-transparent text-black mt-4 outline-none"
                  />
                  <FaLock className="text-2xl text-black mt-5" />
                </div>
                <div className="border-b-2 border-solid border-white w-[340px] h-[8vh]  mt-6  flex justify-between ">
                  <input
                    type="Email"
                    placeholder="Email here"
                    required
                    className="text-center bg-transparent text-black mt-4 outline-none"
                  />
                </div>
                <div className="flex justify-center mt-7 ">
                  <input
                    type="submit"
                    value="submit"
                    className="bg-lime-800  rounded-xl w-[17rem] h-[8vh] hover:bg-sky-500 border-none font-serif text-2xl "
                  />
                </div>
              </form>
              <div className="flex justify-between mt-4 ">
                <div className="flex justify-center  items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-[19px] h-[6vh] accent-green-700  "
                  />
                  <h2 className="text-white">Done with it</h2>
                </div>
                <a href="" className="mt-1 text-white">
                  Forget Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
