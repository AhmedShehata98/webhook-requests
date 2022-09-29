import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function CurrentStatus() {
  const {
    app: {
      data: {
        basicData: { url },
      },
      responseStatusCode,
      responseStatusText,
    },
  } = useSelector((s) => s);
  const statusCodeRef = useRef(null);
  // useEffect(() => {
  //   if (responseStatusCode === 200) {
  //     statusCodeRef.current.classList.add("text-emerald-400");
  //   }
  //   if (responseStatusCode === 500 || responseStatusCode === 502) {
  //     statusCodeRef.current.classList.add("text-red-400");
  //   }

  //   if (responseStatusCode === 400) {
  //     statusCodeRef.current.classList.add("text-yellow-300");
  //   }
  // }, [responseStatusCode]);

  const handleConnectionStatusColor = () => {
    if (responseStatusCode === 200) return "text-emerald-400";
    if (responseStatusCode === 500 || responseStatusCode === 502)
      return "text-red-400";
    if (responseStatusCode === 400) return "text-yellow-300";
  };
  return (
    <header className="bg-zinc-600 p-1 px-2 mb-5 ">
      <nav className="flex justify-between">
        <span className="h-inherit w-9 flex items-center justify-center">
          <i className="fi fi-sr-globe text-[#D45235] text-lg"></i>
        </span>
        <a className="h-inherit" href={url || "#"}>
          {Boolean(url) ? url : "No URL . Please fill out the URL field"}
        </a>
        <div className="h-inherit min-w-28  flex items-center gap-5 ">
          <span
            ref={statusCodeRef}
            className="h-inherit text-slate-100 inline-flex items-center gap-2 "
          >
            <i className="fi fi-sr-link-slash "></i>
            <code className="inline-block">{responseStatusCode}</code>
          </span>
          <span className="h-inherit text-slate-50 inline-flex items-center gap-2">
            <i className="fi fi-sr-network "></i>
            <code className="inline-block">{responseStatusText}</code>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default CurrentStatus;
