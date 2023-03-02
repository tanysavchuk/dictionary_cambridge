import React from "react";
interface CardContentInterface {
  text: string;
}
const CardContent = ({ text }: CardContentInterface) => {
  return (
    <div className="w-[30%] my-5 mr-5">
      <div className="border border-gray-300 rounded-2xl h-28 bg-gray-100"></div>
      <div className="mt-3">{text}</div>
    </div>
  );
};
export default CardContent;
