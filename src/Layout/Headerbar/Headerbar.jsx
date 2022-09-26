import React, { useState } from "react";
import { navbar } from "../../utilities/constans";
import WebHookImg from "../../assets/WebHook.png";
import { nanoid } from "nanoid";

const Headerbar = () => {
  const [toggle, settoggle] = useState(window.innerWidth <= 768 ? false : true);
  return (
    <header
      className="bg-stone-900 text-white flex flex-col md:flex-row md:items-center md:justify-between
      min-h-max md:h-16 px-3 py-1 md:py-0  md:px-20 items-start justify-between sticky top-0 z-10"
    >
      <a
        className="inline-block h-14 md:h-full aspect-square "
        href={navbar.logo}
      >
        <img className=" max-w-full object-cover" src={WebHookImg} alt="logo" />
      </a>
      <button
        className={`flex items-center justify-center p-1 text-black text-2xl absolute top-2/4 -translate-y-2/4 right-5 sm:hidden ${
          toggle
            ? "bg-red-500 hover:bg-red-300 "
            : "bg-green-300 hover:bg-emerald-400 "
        }`}
        type="button"
        onClick={() => {
          settoggle((prev) => !prev);
        }}
      >
        {toggle ? (
          <i className="fi fi-sr-x m-auto leading-3"></i>
        ) : (
          <i className="fi fi-sr-menu-burger m-auto leading-3"></i>
        )}
      </button>
      {toggle && (
        <nav className="flex md:gap-4 capitalize flex-col md:flex-row md:divide-y-0 divide-y-[1px] md:bg-stone-900 bg-stone-800 w-full md:w-max mb-3 mt-3 md:mt-0 md:mb-0">
          {navbar.links.map((l) => (
            <a
              className="hover:bg-emerald-600 focus:bg-emerald-600 p-1 flex-1 md:w-20 text-center md:rounded-full "
              href={l.id}
              key={nanoid(3)}
            >
              {l.title}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Headerbar;
