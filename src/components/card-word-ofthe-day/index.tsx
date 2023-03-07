import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";
interface WordOfTheDayInterface {
  word: string;
  transliterationUK: string;
  transliterationUS: string;
  text: string;
  button: ReactElement;
  children?: ReactElement;
}
const WordOfTheDay = ({
  word,
  transliterationUK,
  transliterationUS,
  text,
  button,
  children,
}: WordOfTheDayInterface) => {
  return (
    <div className="flex shadow-[1px_1px_20px_2px_#00000024] text-indigo-900 my-8 w-full">
      <div className=" p-5 bg-amber-300 w-1/2 text-center">
        <p className="mt-5 font-light">WORD OF THE DAY</p>
        <p className="my-5 text-4xl ">{word}</p>
        <p className="mb-5 font-light text-lg">
          <span className="mr-4 font-medium">
            UK <FontAwesomeIcon icon={faVolumeLow} />
          </span>
          /{transliterationUK}/
          <span className="mr-4 ml-2 font-medium">
            US <FontAwesomeIcon icon={faVolumeLow} />
          </span>
          {transliterationUS}/
        </p>
      </div>
      <div className="p-5 bg-white w-1/2">
        <p className="my-5">{text}</p>
        {button}
        {children && children}
      </div>
    </div>
  );
};
export default WordOfTheDay;
