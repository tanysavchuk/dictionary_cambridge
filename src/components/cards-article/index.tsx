import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface CardArticleInterface {
  picture?: string;
  chapter?: string;
  title?: string;
  date?: string;
  button?: ReactElement;
  children?: ReactElement;
  link?: string;
}

const CardArticle = ({
  picture,
  chapter,
  title,
  date,
  button,
  children,
  link,
}: CardArticleInterface) => {
  return (
    <div className="flex shadow-[1px_1px_20px_2px_#00000024] text-indigo-900 w-full">
      <div className="w-1/2 hover:opacity-75 hover:transition-[opacity] hover:duration-200 hover:transition hover:ease-in-out">
        <img alt="" src={picture} className=""></img>
      </div>
      <div className="p-5 bg-white w-1/2">
        <p className="uppercase font-light">{chapter}</p>
        <Link to={`${link}`}>
          <h3 className="text-xl my-5 hover:underline-offset-4 hover:underline">
            {title}
          </h3>
        </Link>
        <p className="text-sm mb-5">{date}</p>
        {button}
        {children && children}
      </div>
    </div>
  );
};
export default CardArticle;
