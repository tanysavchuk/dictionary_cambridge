import React, { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const customAnimation = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const DictionaryAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="p-3">
      <Fragment>
        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-xs font-bold text-gray-900"
          >
            DEFINITIONS
          </AccordionHeader>
          <AccordionBody>
            <p className="text-sm text-slate-500 my-2">
              Clear explanations of natural written and spoken English
            </p>
            <ol className="text-base text-gray-900 font-medium leading-8">
              <li>
                <Link to="#">English</Link>
              </li>
              <li>
                <Link to="#">Learner’s Dictionary</Link>
              </li>
              <li>
                <Link to="#">Essential British English</Link>
              </li>
              <li>
                <Link to="#">Essential American English</Link>
              </li>
            </ol>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-xs font-bold text-gray-900"
          >
            TRANSLATIONS
          </AccordionHeader>
          <AccordionBody>
            <p className="text-sm text-slate-500 my-2">
              Click on the arrows to change the translation direction.
            </p>
            <h4 className="text-base font-semibold text-gray-800">
              Bilingual Dictionaries
            </h4>
            <ul className="text-lg leading-8 font-medium my-3">
              <li>
                <Link to="#">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      className="text-red-600 text-base mx-1"
                    />
                  </span>
                  English–Dutch
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      className="text-red-600 text-base mx-1"
                    />
                  </span>
                  English–French
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      className="text-red-600 text-base mx-1"
                    />
                  </span>
                  English–German
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      className="text-red-600 text-base mx-1"
                    />
                  </span>
                  English–Indonesian
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      className="text-red-600 text-base mx-1"
                    />
                  </span>
                  English–Italian
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      className="text-red-600 text-base mx-1"
                    />
                  </span>
                  English–Japanese
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      className="text-red-600 text-base mx-1"
                    />
                  </span>
                  English–Norwegian
                </Link>
              </li>
            </ul>
            <h4 className="text-sm text-gray-900 font-semibold my-2">
              Semi-bilingual Dictionaries
            </h4>
            <ul className="text-lg leading-8 font-medium">
              <li>
                <Link to="#">English–Arabic</Link>
              </li>
              <li>
                <Link to="#">English–Catalan</Link>
              </li>
              <li>
                <Link to="#">English–Chinese (Simplified)</Link>
              </li>
              <li>
                <Link to="#">English–Chinese (Traditional)</Link>
              </li>
              <li>
                <Link to="#">English–Czech</Link>
              </li>
              <li>
                <Link to="#">English–Danish</Link>
              </li>
              <li>
                <Link to="#">English–Hindi</Link>
              </li>
              <li>
                <Link to="#">English–Korean</Link>
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
};

export default DictionaryAccordion;
