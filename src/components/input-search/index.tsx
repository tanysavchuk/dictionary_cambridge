import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const InputSearch = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center relative w-full">
        <input
          type="search"
          placeholder="Search Grammar"
          className="p-2 w-full outline-none rounded-full text-lg"
        ></input>
        <div className="absolute right-10 flex items-center justify-between">
          <button className="p-2 border-r border-gray-300 ">
            <FontAwesomeIcon icon={faXmark} className="text-xl font-bold " />
          </button>
          <button className="px-5 py-2 text-lg text-center ">English</button>
          <button className="p-2">
            <FontAwesomeIcon icon={faEllipsisVertical} className="text-xl" />
          </button>
        </div>
      </div>
      <button className="py-3 px-4 rounded-full bg-amber-400 text-center ml-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg " />
      </button>
    </div>
  );
};
export default InputSearch;
