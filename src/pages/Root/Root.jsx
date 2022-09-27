import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/pexels-junior-teixeira-2047901.jpg";
import Headerbar from "../../Layout/Headerbar/Headerbar";

const Root = () => {
  return (
    <>
      <Headerbar />
      <main className="flex items-center flex-col md:flex-row min-h-screen bg-neutral-800 md:pl-20">
        <article className="w-full md:w-2/4 h-2/4 items-start text-white px-2 py-10 md:px-0 md:py-0">
          <h4 className="mb-4 text-2xl md:text-2xl font-sans">
            Lorem ipsum dolor sit amet consectetur.
          </h4>
          <h2 className="mb-5 md:mb-16 text-3xl md:text-5xl">
            Lorem, ipsum <spank className=" text-emerald-300">dolor</spank>
          </h2>
          <p className="mb-3 text-sm text-opacity-60 text-stone-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo
            iste doloribus praesentium consequuntur nemo, error quibusdam
            voluptatum consectetur odit aspernatur sint, delectus ut dignissimos
            laborum repudiandae omnis corrupti quasi!
          </p>
          <Link
            className="bg-emerald-300 text-emerald-900 px-16 py-2  md:mb-10 font-mono font-bold text-lg rounded-3xl border-[1px] border-emerald-900 hover:bg-transparent hover:text-emerald-300 hover:border-emerald-600"
            to={"/app"}
          >
            try now
          </Link>
        </article>
        <article className="w-full md:w-2/4 max-h-screen overflow-hidden">
          <img
            className="max-w-full object-cover object-center "
            src={heroImage}
            alt="hero-img"
          />
        </article>
      </main>
    </>
  );
};

export default Root;
