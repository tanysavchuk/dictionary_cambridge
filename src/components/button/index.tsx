import React from "react";
interface ButtonInterface {
  bg?: string;
  name: string;
  mx?: string;
  bgHover?: string;
  textHover?: string;
}
const Button = (props: ButtonInterface) => {
  return (
    <>
      <button
        className={`text-white font-semibold py-1 px-3 ${props.bg} rounded-3xl ${props.textHover} ${props.bgHover} ${props.mx}`}
      >
        {props.name}
      </button>
    </>
  );
};
export default Button;
