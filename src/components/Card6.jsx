import { GoPlus } from "react-icons/go";

function Card6() {
  return (
    <div className="mt-20 mx-4 md:mx-14 my-14 flex flex-col md:flex-row justify-center gap-10">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80"
          alt="FAQ Visual"
          className="w-full max-w-sm md:max-w-md h-auto rounded-2xl object-cover"
        />
      </div>

      {/* Text + Questions */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700">Questions</h1>
        <p className="mt-4 text-base md:text-xl text-slate-500">
          Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.
        </p>

        {/* FAQ Items */}
        <div className="mt-10 space-y-6">
          {Array(4).fill().map((_, i) => (
            <div key={i} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition">
              <h2 className="text-lg md:text-2xl text-gray-800">Is lunch provided free of cost?</h2>
              <div className="bg-indigo-700 w-9 h-9 flex items-center justify-center rounded-full">
                <GoPlus className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card6;
