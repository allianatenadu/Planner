import { useForm } from "react-hook-form";
import { IoMdPerson } from "react-icons/io";
import { db, signup } from "../firebase/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      const res = await signup(email, password);

      setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const [loading, setLoading] = useState(false);

  const [show,setShow]  = useState(false)

  const handleShow = ()=>{
   if (show === false) {
      return setShow(true)
   }else{
     return setShow(false)
   }
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-screen"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/11276232/pexels-photo-11276232.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
    >
      <div className="relative w-full max-w-md px-4 md:px-8 py-6 backdrop-blur-md rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white mt-3 text-center">Sign Up</h1>
          <p className="text-white text-center">Please fill in the form</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-7 w-full space-y-7">
            <div className="flex justify-between items-center border-b-2 w-full">
              <input
                type="text"
                placeholder="First Name"
                required
                className="bg-transparent outline-none text-white w-full py-2"
                {...register("firstName", { required: true })}
              />
              <IoMdPerson className="mr-2 text-2xl text-white" />
            </div>

            <div className="flex justify-between items-center border-b-2 w-full">
              <input
                type="text"
                placeholder="Surname"
                required
                className="bg-transparent outline-none text-white w-full py-2"
                {...register("surName", { required: true })}
              />
              <IoMdPerson className="mr-2 text-2xl text-white" />
            </div>

            <div className="flex justify-between items-center border-b-2 w-full">
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-transparent outline-none text-white w-full py-2"
                {...register("email", { required: true })}
              />
            </div>

            <div className="flex justify-between items-center border-b-2 w-full">
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-transparent outline-none text-white w-full py-2"
                {...register("password", { required: true })}
              />
            </div>

            <div className="mt-7 w-full">
              <input
                type="submit"
                value={loading ? "Loading..." : "Sign Up"}
                className="w-full bg-blue-700 rounded-md text-2xl text-white py-2 font-bold"
                disabled={loading}
                onClick={handleShow}
              />
            </div>
          </form>
        </div>

        {show && (
          <div
            className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-5 w-full max-w-lg"
            onClick={handleShow}
          >
            <h1 className="text-center text-3xl font-serif font-semibold text-green-600">
              <Link to="/">Successful Booked</Link>
            </h1>
            <div className="text-center mt-24 font-serif text-2xl">
              <p>Please check your email box for the booking confirmation.</p>
              <p className="text-xl font-serif">Thank you for choosing our services and have a nice day.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
