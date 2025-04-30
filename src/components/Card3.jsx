function Card3() {
  return (
    <div className="mt-36 px-4 md:px-14">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-[60%]">
          <img 
            src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/f4735327-c5ee-4744-8d2e-7a412fa1932b-bermuda-beach-home-exterior.jpg" 
            alt="beach house" 
            className="w-full h-[40vh] md:h-[80vh] object-cover rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[40%] text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            We have the best service.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 justify-items-center md:justify-items-start">
            <div>
              <h1 className="text-3xl md:text-4xl text-indigo-700 font-bold">192</h1>
              <h2 className="text-xl font-bold">Countries</h2>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl text-indigo-700 font-bold">479</h1>
              <h2 className="text-xl font-bold">Hotels</h2>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl text-indigo-700 font-bold">192</h1>
              <h2 className="text-xl font-bold">Countries</h2>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl text-indigo-700 font-bold">479</h1>
              <h2 className="text-xl font-bold">Hotels</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card3;
