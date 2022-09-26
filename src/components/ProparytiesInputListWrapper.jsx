import React from "react";

function ProparytiesInputListWrapper({ children }) {
  return (
    <form className="min-w-full h-max bg-slate-700 border divide-y divide-emerald-400">
      {children}
    </form>
  );
}

export default ProparytiesInputListWrapper;
