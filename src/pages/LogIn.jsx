import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase/config";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      await login(email, password);
      navigate("/");
      console.log("Login success");
    } catch (error) {
      console.log(error.message);
      // Optionally set an error state to display to the user
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center  items-center w-screen"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/27468751/pexels-photo-27468751/free-photo-of-a-blue-ocean-with-a-rocky-cliff-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
      }}
    >
      <div className="text-black flex justify-center">
        <div className="backdrop-blur-lg w-[470px] h-[76vh] rounded-xl p-4">
          <div className="flex justify-center">
          <Link to="/login">
          <a href=""  className="mt-3 text-4xl  text-white font-bold">Login</a> 
          </Link>
          </div>
          <div className="flex justify-center">
            <div className="flex-col">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-b-2 border-solid border-white w-[340px] h-[8vh] mt-3 flex justify-between">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-center bg-transparent text-black mt-4 outline-none"
                    {...register("firstName", { required: true })}
                  />
                  <IoMdPerson className="text-2xl text-black mt-5" />
                </div>
                <div className="border-b-2 border-solid border-white w-[340px] h-[8vh] mt-6 flex justify-between">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="text-center bg-transparent text-black mt-4 outline-none"
                    {...register("password", { required: true })}
                  />
                  <FaLock className="text-2xl text-black mt-5" />
                </div>
                <div className="border-b-2 border-solid border-white w-[340px] h-[8vh] mt-6 flex justify-between">
                  <input
                    type="email"
                    placeholder="Email here"
                    required
                    className="text-center bg-transparent text-black mt-4 outline-none"
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && <p className="text-red-500">Email is required</p>}
                {errors.password && <p className="text-red-500">Password is required</p>}
                <div className="flex justify-center mt-7">
                  <input
                    type="submit"
                    value={loading ? "Loading..." : "Submit"}
                    disabled={loading}
                    className="bg-lime-800 rounded-xl w-[17rem] h-[8vh] hover:bg-sky-500 border-none font-serif text-2xl"
                  />
                </div>
              </form>
              <div className="flex justify-between mt-4">
                <div className="flex justify-center items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-[19px] h-[6vh] accent-green-700"
                  />
                  <h2 className="text-white">Done with it</h2>
                </div>
              <Link to="/sign-up">
              <a href="" className="mt-1 text-white">
                  Forget Password
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
