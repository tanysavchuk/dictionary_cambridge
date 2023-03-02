import React from "react";
import { Link } from "react-router-dom";
interface browseGrammarInterface {
  link: string;
  name: string;
}
const BrowseGrammar = ({ link, name }: browseGrammarInterface) => {
  return (
    <div className=" font-semibold w-12 text-center py-1 px-3 mr-3 mb-3  bg-slate-400 rounded-3xl text-center  hover:bg-slate-500">
      <Link to={link} className="w-full">
        {name}
      </Link>
    </div>
  );
};

export default BrowseGrammar;
