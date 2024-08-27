import { useForm } from "react-hook-form";
import { IoMdPerson } from "react-icons/io";
import { db, signup } from "../firebase/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";

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

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-screen "
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/11276232/pexels-photo-11276232.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
    >
      <div>
        <div className=" flex justify-center mx-32   backdrop-blur-md w-[390px] h-[92vh] rounded-xl">
          <div className="flex-col">
            <h1 className="text-4xl font-bold text-white mt-3 text-center">
              Sign Up
            </h1>
            <p className="text-white text-center">Please fill in the form</p>
            <dev>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="bg-transparent outline-none  text-white"
                    {...register("firstName", { required: true })}
                  />
                  <IoMdPerson className="mr-2 text-2xl" />
                </div>
                <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                  <input
                    type="text"
                    placeholder="Surname"
                    className="bg-transparent outline-none  text-white"
                    {...register("surName", { required: true })}
                  />
                  <IoMdPerson className="mr-2 text-2xl" />
                </div>

                <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                  <input
                    type="email"
                    placeholder="Email here"
                    className="bg-transparent outline-none  text-white placeholder:text-black"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="border-b-2 w-[290px] mt-7 flex justify-between items-center ">
                  <input
                    type="Password"
                    placeholder="Password"
                    className="bg-transparent outline-none  text-white"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className=" mt-7 bg-blue-700 h-[7vh]  rounded-md">
                  <input
                    type="Submit"
                    value={loading ? "loading..." : "Sign Up"}
                    className="outline-none mx-24 font-bold mt-1 text-white  text-2xl "
                    disabled={loading}
                  />
                </div>
              </form>
            </dev>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
