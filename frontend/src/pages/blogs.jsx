import { useState } from "react";
import "./blogs.css";
import Navbar from "../components/Navbar";
const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; //temporary value

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; 
    setCurrentPage(page);
  };
  return (
    <>
      <Navbar />
      <main className="text-white">
        <h1 className="text-center text-[#eee] font-bold text-3xl mt-8">
          LATEST BLOGS
        </h1>

        <div className="max-w-4xl mx-auto mt-8">
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
              <p className="text-green-500 text-lg my-1 font-semibold">Robotics</p>
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
                  {" "}
                  See full
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center text-[#eee] font-bold text-3xl mt-8">
          RELATED BLOGS
        </h1>

        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      {" "}
                      See full
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav aria-label="Page navigation" className="mt-8 flex justify-center">
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
                    : "bg-gray-700 text-white"
                } border border-gray-600 rounded-lg px-4 py-2`}
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
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-700 text-gray-300"
                  } border border-gray-600 rounded-lg px-4 py-2`}
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
                    : "bg-gray-700 text-white"
                } border border-gray-600 rounded-lg px-4 py-2`}
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
