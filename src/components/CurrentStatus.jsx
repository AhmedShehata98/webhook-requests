import React from "react";

function CurrentStatus() {
  return (
    <header className="bg-zinc-600 p-1 px-2 mb-5">
      <nav className="flex">
        <span className="h-inherit w-9 flex items-center justify-center ">
          <i className="fi fi-sr-globe text-[#D45235] text-lg"></i>
        </span>
        <a className="h-inherit" href="#">
          http://www.example.com/some
        </a>
      </nav>
    </header>
  );
}

export default CurrentStatus;
