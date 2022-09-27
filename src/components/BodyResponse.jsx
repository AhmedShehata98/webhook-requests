import React from "react";
import { useSelector } from "react-redux";

function BodyResponse() {
  const {
    app: { responseBody },
  } = useSelector((s) => s);

  return <code className="min-h-full min-w-full">{responseBody}</code>;
}

export default BodyResponse;
