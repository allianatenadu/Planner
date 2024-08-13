import { GoPlus } from "react-icons/go";


function Card6() {
  return (
    <div className="mt-40 mx-14 my-14 flex justify-center">
      <div className=" w-[490px] ">
        <img src="https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" className=" w-[440px] h-[570px] rounded-2xl " />
      </div>
      <div className="w-[600px] ">
      <h1 className="text-6xl font-bold text-gray-700">Questions</h1>
      <p className="mt-4 text-xl text-slate-400">
      Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.
      </p>
      <div className="flex justify-center gap-[15rem]">
        <div className="mt-11">
          <h1 className="text-2xl">is lunch to provide free of cost</h1>
        </div>
        <div className="bg-indigo-700  w-[34px] h-[40px]  rounded-full mt-10 ">
        <GoPlus className=" text-4xl pt-1 pr-1 text-white " />
        </div>
      </div>
      <div className="flex justify-center mt-1 gap-[15rem]">
        <div className="mt-11">
          <h1 className="text-2xl">is lunch to provide free of cost</h1>
        </div>
        <div className="bg-indigo-700  w-[34px] h-[40px]  rounded-full mt-10 ">
        <GoPlus className=" text-4xl pt-1 pr-1 text-white " />
        </div>
      </div>
      <div className="flex justify-center mt-1 gap-[15rem]">
        <div className="mt-11">
          <h1 className="text-2xl">is lunch to provide free of cost</h1>
        </div>
        <div className="bg-indigo-700  w-[34px] h-[40px]  rounded-full mt-10 ">
        <GoPlus className=" text-4xl pt-1 pr-1 text-white " />
        </div>
      </div>
      <div className="flex justify-center mt-1 gap-[15rem]">
        <div className="mt-11">
          <h1 className="text-2xl">is lunch to provide free of cost</h1>
        </div>
        <div className="bg-indigo-700  w-[34px] h-[40px]  rounded-full mt-10 ">
        <GoPlus className=" text-4xl pt-1 pr-1 text-white " />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card6

