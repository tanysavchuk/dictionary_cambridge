import React from "react";
import Button from "../button";

const InternalAdvertising = () => {
  return (
    <div className="bg-amber-400 sm:w-full relative flex">
      <div className="p-5 md:z-40">
        <p className="bg-indigo-900 text-white text-xl font-semibold w-min px-3 py-1">
          Cambridge
        </p>
        <p className="bg-orange-500 text-indigo-900 text-xl font-semibold w-max  px-3 py-1 ">
          Dictionary +Plus
        </p>
        <p className="my-5">
          Free word lists and quizzes to create, download and share!
        </p>
        <div className="flex md:text-sm">
          <Button name="Go to +Plus" bg="bg-indigo-900" px="px-5" />
          <span className="mx-3">or</span>
          <Button name="Log in" bg="bg-cyan-300 text-indigo-900" px="px-5" />
        </div>
      </div>
      <img
        alt=""
        src="https://dictionary.cambridge.org/external/images/ptn-plus.svg"
        className=" sm:max-w-[300px] absolute top-0 right-0 md:max-w-none md:w-full"
      />
    </div>
  );
};
export default InternalAdvertising;
