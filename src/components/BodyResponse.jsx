import React from "react";
import { useSelector } from "react-redux";
import JSONViewer from "react-json-viewer";

function BodyResponse() {
  const {
    app: { responseBody },
  } = useSelector((s) => s);

  return (
    <div className="overflow-auto h-inherit">
      {Boolean(responseBody) && (
        <JSONViewer style={{ color: "#fff" }} json={responseBody} />
      )}
      {/* <pre>
        {Boolean(responseBody) && JSON.stringify(responseBody, null, 3)}
      </pre> */}
    </div>
  );
}

export default BodyResponse;
