import React, { useState } from "react";

function Form() {
  const [fd, setfd] = useState({
    name: "",
    id: "",
  });
  return (
    <form className="bg-slate-500 w-full h-screen block">
      <input
        className="bg-blue-500 text-white"
        type="text"
        name="name"
        id="name"
        value={fd.name}
        onChange={(e) => setfd((prev) => ({ ...prev, name: e.target.value }))}
      />
      <input
        className="bg-blue-500 text-white"
        type="text"
        name="id"
        id="id"
        value={fd.id}
        onChange={(e) => setfd((prev) => ({ ...prev, id: e.target.value }))}
      />
    </form>
  );
}

export default Form;
