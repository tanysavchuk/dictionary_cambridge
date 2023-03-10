import React from "react";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="flex justify-between text-white  w-full">
      <div className="flex font-light">
        <div>
          <Link to="#">
            <p className="hover:underline mb-2">LEARN</p>
          </Link>
          <ul>
            <Link to="#">
              <li className="hover:underline">New Words</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Help</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">In Print</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Word of the Year 2021</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Word of the Year 2022</li>
            </Link>
          </ul>
        </div>
        <div className="mx-10">
          <Link to="#">
            <p className="hover:underline mb-2">DEVELOP</p>
          </Link>
          <ul>
            <Link to="#">
              <li className="hover:underline">Dictionary API</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Double-Click Lookup</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Search Widgets</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">License Data</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to="#">
            <p className="hover:underline mb-2">ABOUT</p>
          </Link>
          <ul>
            <Link to="#">
              <li className="hover:underline">Accessibility</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Cambridge English</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">
                Cambridge University Press & Assessment
              </li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Consent Management</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Cookies and Privacy</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Corpus</li>
            </Link>
            <Link to="#">
              <li className="hover:underline">Terms of Use</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex text-white">
          <Link to="https://www.facebook.com/CUPCambridgeDictionary/">
            <div className="bg-blue-800 h-10 w-10 flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
            </div>
          </Link>

          <Link to="https://www.instagram.com/cambridgewords/">
            <div className="bg-pink-600	h-10 w-10 flex justify-center items-center mx-10">
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            </div>
          </Link>

          <Link to="https://twitter.com/CambridgeWords">
            <div className="bg-sky-500 h-10 w-10 flex justify-center items-center">
              <FontAwesomeIcon icon={faTwitter} className="text-lg" />
            </div>
          </Link>
        </div>
        <Link to="https://www.cambridge.org/">
          <div className=" my-5">
            <img
              alt=""
              src="https://dictionary.cambridge.org/external/images/cup&a-logo-white-@1x.png?version=5.0.301"
            />
          </div>
        </Link>
        <div>
          <p className="text-center text-sm">
            <FontAwesomeIcon icon={faCopyright} />
            Cambridge University Press &
          </p>
          <p className="text-center text-sm">Assessment 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
