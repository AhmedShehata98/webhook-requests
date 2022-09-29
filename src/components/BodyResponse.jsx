import React from "react";
import { useSelector } from "react-redux";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

function BodyResponse() {
  const {
    app: { responseBody },
  } = useSelector((s) => s);

  return (
    <div className="overflow-auto h-inherit">
      {Boolean(responseBody) && (
        <JSONPretty
          id="body-pretty-data"
          data={responseBody}
          keyStyle={"color: #fcfcfc"}
          valueStyle={"color: #d392ff"}
          booleanStyle={"color: #31f7c6"}
          stringStyle={"color: #d6da1b"}
        />
      )}
    </div>
  );
}

export default BodyResponse;
