import React from "react";
interface ButtonInterface {
  bg?: string;
  name: string;
  mx?: string;
}
const Button = (props: ButtonInterface) => {
  return (
    <>
      <button
        className={`text-white font-semibold py-1 px-3 bg-fuchsia-800 rounded-3xl hover:text-rose-100 hover:bg-fuchsia-900 ${props.mx}`}
      >
        {props.name}
      </button>
    </>
  );
};
export default Button;
