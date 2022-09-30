import React from "react";

function ProparytiesInputListWrapper({ children }) {
  return (
    <form className="min-w-full h-max  border border-slate-500 divide-y divide-slate-500">
      {children}
    </form>
  );
}

export default ProparytiesInputListWrapper;
