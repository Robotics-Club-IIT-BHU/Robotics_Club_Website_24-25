import React from 'react';
import Navbar from "../components/Navbar";
import Background from '../components/Background';
import Footer from "../components/Footer";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const BlogPage = () => {
    return (
      <>
        <main className="text-white relative">
          <Background />
          <Navbar />
          <div className="px-20 mt-10">
            <h1 className="text-white text-3xl">Sustainability Web Designs <a href="/blogs" className="float-end"><IoArrowBackCircleOutline style={{ fontSize: '3rem' }}/></a></h1>
            <h1 className="text-purple-200 text-3xl">
              Accessible & Best SEO Practices
            </h1>
          </div>

          <div className="flex justify-between items-center text-white px-20 py-4">
            <h4>Christine Josephus</h4>
            <h4>05 June, 2024</h4>
          </div>

          <hr className="border-t border-white mx-auto w-11/12 my-4" />

          <div className="mx-20 text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget turpis eu felis consequa Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. At soluta, expedita non aliquid
              temporibus nulla? Eveniet porro, voluptate iure itaque culpa
              beatae quia!
            </p>
          </div>

          <div className="flex justify-center bg-white h-80 w-11/12 max-w-6xl mx-auto my-10 rounded-lg"></div>

          <div className="mx-20 text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget turpis eu felis consequat fringilla Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Reiciendis nulla illo esse
              voluptates. Unde, consequatur! Id, dolorum. Possimus enim
              inventore ducimus incidunt voluptas, eveniet ea at, molestias hic
              ex distinctio sequi voluptatem debitis excepturi.
            </p>
          </div>

          <div className="mx-20 text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget turpis eu felis consequat fringilla Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Assumenda, illum?
              Necessitatibus eaque itaque, nostrum ea eius quod voluptatem
              aliquid eligendi blanditiis accusantium explicabo, nulla similique
              aperiam, suscipit voluptate dolor ducimus. Nam sapiente voluptas
              labore quibusdam atque optio accusantium in doloremque!
            </p>
          </div>

          <br />

          <div className="mx-20 text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget turpis eu felis consequat fringilla Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusantium incidunt odit nisi
              odio quis, omnis unde delectus pariatur beatae quam minima
              nesciunt eius nulla illo totam eos nihil reiciendis. Itaque,
              laboriosam deserunt!
            </p>
          </div>

          <div className="flex items-center justify-between mx-20 mt-10">
            <span className="italic text-lg font-bold">Share Via</span>
            <div className="flex justify-center flex-grow space-x-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </main>
        <Footer/>
      </>
    );
};

export default BlogPage;
