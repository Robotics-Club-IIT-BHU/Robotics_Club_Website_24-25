import { useState } from "react";
import Navbar from "../components/Navbar";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // temporary value

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <main className="text-white relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <svg
                  width="525"
                  height="611"
                  viewBox="0 0 525 611"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <g filter="url(#filter0_f_1_440)">
                    <path
                      d="M68.7289 -18.9194L433.488 416.77L237.968 441.251L-197.46 518.974L68.7289 -18.9194Z"
                      fill="url(#paint0_linear_1_440)"
                      fillOpacity="0.4"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1_440"
                      x="-288.76"
                      y="-110.219"
                      width="813.548"
                      height="720.493"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="45.65"
                        result="effect1_foregroundBlur_1_440"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_440"
                      x1="78.5701"
                      y1="181.987"
                      x2="89.8454"
                      y2="292.817"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0440BC" />
                      <stop offset="1" stopColor="#0E5454" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col mt-60">
                <svg
                  width="705"
                  height="705"
                  viewBox="0 0 705 705"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <g filter="url(#filter0_f_1_436)">
                    <path
                      d="M499.327 92L726.115 613L531.646 581.239L92 532.76L499.327 92Z"
                      fill="url(#paint0_linear_1_436)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1_436"
                      x="0.699997"
                      y="0.699997"
                      width="816.715"
                      height="703.6"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="45.65"
                        result="effect1_foregroundBlur_1_436"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_436"
                      x1="452"
                      y1="287.5"
                      x2="431.5"
                      y2="397"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0440BC" />
                      <stop offset="1" stopColor="#0E5454" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex justify-between mt-60">
              <div className="flex flex-col">
                <svg
                  width="649"
                  height="762"
                  viewBox="0 0 649 762"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_1_458)">
                    <path
                      d="M117.206 91.748L557.213 451.287L369.755 512.007L-43.367 670.023L117.206 91.748Z"
                      fill="url(#paint0_linear_1_458)"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1_458"
                      x="-134.667"
                      y="0.447983"
                      width="783.18"
                      height="760.874"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="45.65"
                        result="effect1_foregroundBlur_1_458"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_458"
                      x1="164.556"
                      y1="287.242"
                      x2="196.42"
                      y2="393.991"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0440BC" />
                      <stop offset="1" stopColor="#0E5454" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-end mt-[600px]">
                <svg
                  width="383"
                  height="772"
                  viewBox="0 0 383 772"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_1_466)">
                    <path
                      d="M92.2021 91.564L647.084 213.956L507.174 352.709L209.755 680.093L92.2021 91.564Z"
                      fill="url(#paint0_linear_1_466)"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1_466"
                      x="0.902145"
                      y="0.263962"
                      width="737.482"
                      height="771.129"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="45.65"
                        result="effect1_foregroundBlur_1_466"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_466"
                      x1="222.648"
                      y1="244.678"
                      x2="299.24"
                      y2="325.574"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0440BC" />
                      <stop offset="1" stopColor="#0E5454" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
        <h1 className="text-center text-[#eee] font-bold text-3xl mt-8 z-10 relative">
          LATEST BLOGS
        </h1>

        <div className="max-w-4xl mx-auto mt-8 z-10 relative">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden md:flex transform transition-transform duration-300 ease-in hover:shadow-xl hover:scale-105">
            <div className="md:w-1/3">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.NRVlzSn4MoKW2rnvb6gI9gAAAA&pid=Api&P=0&h=180"
                className="w-64 h-64 rounded-2xl object-cover m-5"
                alt="Blog Image"
              />
            </div>
            <div className="md:w-2/3 p-4">
              <a
                className="text-white float-right text-lg"
                href="#"
                title="Share this blog"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
              </a>
              <p className="text-green-500 text-lg my-1 font-semibold">
                Robotics
              </p>
              <div className="flex justify-between items-center">
                <div className="text-gray-500 my-1">By Writer Name</div>
                <div className="text-white">23 Dec.</div>
              </div>
              <div className="clear-both">
                <p className="text-gray-300 text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  ad quo quia earum amet ipsum illum reiciendis temporibus,
                  dicta sequi sunt, iusto cupiditate. Officiis animi recusandae
                  numquam minima dolor iure.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nam animi a in veniam quis
                  explicabo autem aliquam perferendis error assumenda qui,
                  beatae velit, voluptates reiciendis earum blanditiis non
                  laudantium eius
                </p>
                <a href="#" className="text-blue-400 float-end">
                  See full
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center text-[#eee] font-bold text-3xl mt-8 z-10 relative">
          RELATED BLOGS
        </h1>

        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl border border-gray-600 shadow-lg overflow-hidden transform transition-transform duration-300 ease-in hover:shadow-xl hover:scale-105"
            >
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.NRVlzSn4MoKW2rnvb6gI9gAAAA&pid=Api&P=0&h=180"
                className="w-full h-48 object-cover"
                alt="Blog Image"
              />
              <div className="p-4">
                <p className="text-green-500 text-lg font-semibold my-1">
                  Robotics
                </p>
                <div className="flex justify-between items-center ">
                  <div className="text-gray-500 my-1">By Writer Name</div>
                  <div className="text-white">23 Dec.</div>
                </div>
                <div className="clear-both">
                  <p className="text-gray-300 text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error ad quo quia earum amet ipsum illum reiciendis
                    temporibus, dicta sequi sunt, iusto cupiditate.
                    <a href="#" className="text-blue-400">
                      See full
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav
          aria-label="Page navigation"
          className="mt-8 flex justify-center z-10 relative"
        >
          <ul className="pagination flex list-none my-10 items-center">
            <li
              className={`flex items-center page-item ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <a
                className={`page-link ${
                  currentPage === 1
                    ? "bg-gray-700 text-gray-400"
                    : "bg-gray-800 text-white"
                } border border-slate-600 rounded-lg px-4 py-1 mx-2`}
                href="#"
                onClick={(e) => {
                  if (currentPage === 1) {
                    e.preventDefault();
                  } else {
                    handlePageChange(currentPage - 1);
                  }
                }}
              >
                Previous
              </a>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className="page-item">
                <a
                  className={`page-link ${
                    currentPage === index + 1
                      ? "bg-blue-700 text-white"
                      : "bg-gray-800 text-gray-300"
                  } border border-slate-600 rounded-full px-3 py-0.5 mx-1`}
                  href="#"
                  onClick={(e) => {
                    if (currentPage === index + 1) {
                      e.preventDefault();
                    } else {
                      handlePageChange(index + 1);
                    }
                  }}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li
              className={`flex items-center page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className={`page-link ${
                  currentPage === totalPages
                    ? "bg-gray-700 text-gray-400"
                    : "bg-gray-800 text-white"
                } border border-gray-600 rounded-lg px-4 py-1 mx-2`}
                href="#"
                onClick={(e) => {
                  if (currentPage === totalPages) {
                    e.preventDefault();
                  } else {
                    handlePageChange(currentPage + 1);
                  }
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Blogs;
