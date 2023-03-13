import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TapScrollTop = () => {
  return (
    <div className="bg-slate-500 h-9 w-9 rounded-full flex items-center justify-center fixed right-8 bottom-2">
      <FontAwesomeIcon icon={faAngleUp} className="text-white text-xl" />
    </div>
  );
};
export default TapScrollTop;
