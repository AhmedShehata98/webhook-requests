import React from "react";

function PageWrapper(props) {
  return (
    <div
      className="w-full bg-zinc-800 text-white flex flex-row gap-1 items-start justify-start"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      {props.children}
    </div>
  );
}

export default PageWrapper;
