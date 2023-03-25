import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Lenguage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <div className="p-3 flex justify-between border-b border-gray-400">
        <button className="flex items-center" onClick={handleOpen}>
          <FontAwesomeIcon icon={faEarth} className="mr-1" />
          LENGUAGE
        </button>
        <button className="font-light">Change</button>
      </div>

      {open ? (
        <div className="grid pl-5 ">
          <Link to="#" className="font-light underline p-3">
            English (UK)
          </Link>
          <Link to="#" className="font-light underline p-3">
            English (US)
          </Link>
          <Link to="#" className="font-light underline p-3">
            Español
          </Link>
          <Link to="#" className="font-light underline p-3">
            Español (Latinoamérica)
          </Link>
          <Link to="#" className="font-light underline p-3">
            Русский
          </Link>
          <Link to="#" className="font-light underline p-3">
            Português
          </Link>
          <Link to="#" className="font-light underline p-3">
            Deutsch
          </Link>
          <Link to="#" className="font-light underline p-3">
            Français
          </Link>
          <Link to="#" className="font-light underline p-3">
            Italiano
          </Link>
        </div>
      ) : null}
    </div>
  );
};
export default Lenguage;
