function Card4() {
  return (
    <div className="mt-44 px-4">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700">Popular Posts</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700">Recent Posts</h1>
      </div>

      {/* Cards Section */}
      <div className="mt-11 flex flex-col lg:flex-row gap-8 items-start">
        {/* Popular Post 1 */}
        <div className="w-full lg:w-[30%]">
          <img
            src="https://freerangestock.com/sample/154521/a-road-with-trees-and-mountains-in-the-background.jpg"
            alt=""
            className="w-full h-[40vh] object-cover rounded-2xl"
          />
          <p className="mt-6 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quasi ullam consequatur, asperiores dolore eaque nulla sint molestias corporis at dolor eius eligendi cupiditate. Hic accusantium cumque quam quos est.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps="
              alt=""
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-bold">Alliana</h2>
              <p className="text-sm text-gray-500">New York</p>
            </div>
          </div>
        </div>

        {/* Popular Post 2 */}
        <div className="w-full lg:w-[30%]">
          <img
            src="https://pix11.com/wp-content/uploads/sites/25/2022/07/Rockaway-Beach.jpg?w=1280"
            alt=""
            className="w-full h-[40vh] object-cover rounded-2xl"
          />
          <p className="mt-6 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quasi ullam consequatur, asperiores dolore eaque nulla sint molestias corporis at dolor eius eligendi cupiditate. Hic accusantium cumque quam quos est.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <img
              src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA="
              alt=""
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-bold">Adams</h2>
              <p className="text-sm text-gray-500">Vlogger</p>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="w-full lg:w-[35%] space-y-4">
          {[
            {
              img: "https://img.freepik.com/premium-photo/beautiful-nature-green-forest-with-river-flowing-through-jungle-lush-rainforest-rivers-summer-rainforest-covered-by-green-trees-ai-generated_585735-7996.jpg",
            },
            {
              img: "https://img.freepik.com/premium-photo/car-driving-down-desert-road-with-majestic_1047188-10313.jpg",
            },
            {
              img: "https://media.licdn.com/dms/image/C4E12AQGq1KM5NWFSFQ/article-cover_image-shrink_600_2000/0/1520136267514?e=2147483647&v=beta&t=gbaeiHGBqtVtN6SVRKqJAzf4jDu9NiXPGiSdUaEBfZo",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jKycDYR5jJ_YSFZTfzo5P7kHT6du3ujK-A&s",
            },
            {
              img: "https://baptistandreflector.org/wp-content/uploads/2017/12/mountain-climbing-men-silhouette.jpg",
            },
          ].map((post, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="flex-1">
                <h3 className="font-bold text-lg">
                  Getting the most out of your Vacation
                </h3>
                <p className="text-sm text-gray-500">Samuel Joe</p>
              </div>
              <img
                src={post.img}
                alt="thumbnail"
                className="w-32 h-24 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card4;
