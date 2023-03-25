import {
  faMagnifyingGlass,
  faPlus,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DictionaryAccordion from "../dictionary-accordion";
import { Link } from "react-router-dom";
import Lenguage from "../language";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LeftSideBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 z-50 bg-transparent">
      <div className="bg-white top-0 left-0 z-50 sm:w-full md:w-[400px] font-semibold text-sm text-gray-900 fixed h-full overflow-scroll">
        <div className=" sm:hidden md:flex justify-between py-5 px-3 border-b border-gray-400">
          <img
            alt=""
            src="	https://dictionary.cambridge.org/external/images/logo-pos.png?version=5.0.303"
          />
          <button>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-lg font-extrabold"
            />
          </button>
        </div>
        <div className="md:hidden sm:flex justify-between py-2 px-3 border-b border-gray-400 bg-indigo-900">
          <div className="flex items-center">
            <button
              className="w-7 h-7 rounded-full bg-indigo-300 flex items-center justify-center 
          mr-5"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className=" font-extrabold text-white text-sm"
              />
            </button>
            <img
              alt=""
              src="https://dictionary.cambridge.org/us/external/images/logo-lrg-small.png?version=5.0.303"
            />
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-white text-sm mr-5"
            />
            <button className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className=" font-extrabold text-sm"
              />
            </button>
          </div>
        </div>
        <>
          <button
            className="flex justify-between items-center border-b border-gray-400 p-3 w-full"
            onClick={handleOpen}
          >
            <h3>Dictionary</h3>
            <FontAwesomeIcon icon={faPlus} className=" font-extrabold" />
          </button>
          {open ? (
            <div>
              <DictionaryAccordion />
            </div>
          ) : null}
        </>
        <div className="grid">
          <Link to="#" className="p-3 border-b border-gray-400">
            Translate
          </Link>
          <Link to="#" className="p-3 border-b border-gray-400">
            Grammar
          </Link>
          <Link to="#" className="p-3 border-b border-gray-400">
            Thesaurus
          </Link>
          <Link to="#" className="p-3 border-b border-gray-400">
            Cambridge Dictionary +Plus
          </Link>
          <Link
            to="#"
            className="flex p-3 border-b border-gray-400 items-baseline"
          >
            <FontAwesomeIcon icon={faUser} className="text-sm mr-2" />
            <p> Log in / Sign up</p>
          </Link>
        </div>
        <Lenguage />
        <div className="flex justify-between p-3 mb-14 border-b border-gray-400">
          <p>Follow us</p>
          <div className="flex">
            <Link to="https://www.facebook.com/CUPCambridgeDictionary/">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              to="https://www.instagram.com/cambridgewords/"
              className="mx-3"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://twitter.com/CambridgeWords">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSideBar;
