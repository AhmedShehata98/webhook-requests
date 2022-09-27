import React from "react";

function MainApp(props) {
  return (
    <article
      style={{ minHeight: "calc(100vh - 55px)" }}
      className="w-fill md:w-3/4 flex flex-col items-stretch justify-center p-1  m-auto "
    >
      {props.children}
    </article>
  );
}

export default React.memo(MainApp);
