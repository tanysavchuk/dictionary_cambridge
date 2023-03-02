import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faCircle,
  faCopyright,
  faEarthAfrica,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InputSearch from "../../components/input-search";
import Button from "../../components/button";
import BrowseGrammar from "../../components/browse-grammar";
import { browseGrammars } from "../../mocks/browse-grammar";
import CardContent from "../../components/cards-content";
import { cardsContent } from "../../mocks/cards-content";

const Grammar = () => {
  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white p-5">
        <div className=" flex items-center justify-between w-[90%]">
          <div className="flex item-center">
            <div className="">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div>
              <Link to="#">Dictionary </Link>
              <Link to="#">Translate </Link>
              <Link to="#">Grammar </Link>
              <Link to="#">Thesaurus </Link>
              <Link to="#">+Plus</Link>
            </div>
          </div>
          <div className="flex item-center">
            <div>
              <Link to="#">
                <FontAwesomeIcon icon={faUser} />
                Log in / Sign up
              </Link>
            </div>
            <div>
              <FontAwesomeIcon icon={faEarthAfrica} />
              English (UK)
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-l from-pink-900 via-rose-700 to-rose-900">
        <div
          className="flex items-center
      justify-between p-5 relative"
        >
          <div className="bg-rose-600 h-9 w-20 absolute top-0 left-0"></div>
          <div className="absolute bottom-0 left-0">
            <div className="flex items-baseline">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-4xl text-cyan-300"
              />
              <div className="bg-violet-800 h-14 w-8"></div>
            </div>
            <div className="bg-fuchsia-400 h-9 w-24"></div>
          </div>
          <div className="absolute top-0 left-[55%]">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-4xl text-sky-500"
            />
            <FontAwesomeIcon
              icon={faCircle}
              className="text-4xl text-fuchsia-400"
            />
          </div>
          <div className="ml-10">
            <img
              decoding="async"
              alt=""
              src="https://dictionary.cambridge.org/external/images/logo-lrg.png?version=5.0.297"
              width="254"
              height="80"
            ></img>
            <p className="text-white mt-1 text-lg "> Grammar</p>
          </div>
          <div className="w-[68%] my-16">
            <InputSearch />
            <div className="flex items-center  mt-8">
              <Button name="English" />
              <Button name="English-Russian" mx="mx-3" />
              <Button name="English-Polish" />
              <Button name="English-German" mx="mx-3" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-4xl text-indigo-900"
            />
            <div className="bg-rose-600 h-9 w-20"></div>

            <div className="bg-sky-500 h-9 w-24 text-end">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-4xl text-violet-800"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[75%]">
          <div>
            <h2>Explore the English Grammar</h2>
            <p>
              Get clear grammar explanations with hundreds of examples of how
              grammar is used in natural written and spoken English.
            </p>
          </div>

          <div className="bg-cyan-100 w-full m-7 px-14 py-7">
            <div className="flex">
              <div className=" w-16 bg-pink-700"></div>
              <div className="bg-white w-full text-start text-gray-700">
                <ol className="text-lg leading-9 mx-7">
                  <Link to="#" className="hover:underline">
                    <li className="border-b border-gray-300 py-2">
                      Adjectives and adverbs
                    </li>
                  </Link>
                  <Link to="#" className="hover:underline">
                    <li className="border-b border-gray-300 py-2">
                      Easily confused words
                    </li>
                  </Link>
                  <Link to="#" className="hover:underline">
                    <li className="border-b border-gray-300 py-2">
                      Nouns, pronouns and determiners
                    </li>
                  </Link>
                  <Link to="#" className="hover:underline">
                    <li className="border-b border-gray-300 py-2">
                      Prepositions and particles
                    </li>
                  </Link>
                  <Link to="#" className="hover:underline">
                    <li className="border-b border-gray-300 py-2">
                      Using English
                    </li>
                  </Link>
                  <Link to="#" className="hover:underline">
                    <li className="border-b border-gray-300 py-2">Verbs</li>
                  </Link>
                  <Link to="#" className="hover:underline">
                    <li className=" py-2">Words, sentences and clauses</li>
                  </Link>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-cyan-100 w-full m-7 px-14 py-7">
            <div>
              <h2>Popular searches</h2>
              <ol className="grid grid-cols-2 gap-2.5 list-[decimal-leading-zero] list-inside	">
                <Link to="#">
                  <li>
                    Determiners (<span className="">the, my, some, this</span>)
                  </li>
                </Link>
                <Link to="#">
                  <li>Table of irregular verbs</li>
                </Link>
                <Link to="#">
                  <li>Word classes and phrase classes</li>
                </Link>
                <Link to="#">
                  <li>Past continuous or past simple?</li>
                </Link>
                <Link to="#">
                  <li>Dates</li>
                </Link>
                <Link to="#">
                  <li>
                    As, <span>when or while?</span>
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <span>Since</span>
                  </li>
                </Link>
                <Link to="#">
                  <li>Adverbs and adverb phrases: position</li>
                </Link>
                <Link to="#">
                  <li>
                    <span>Ought to</span>
                  </li>
                </Link>
                <Link to="#">
                  <li>Inversion</li>
                </Link>
              </ol>
            </div>
          </div>
          <div className="bg-indigo-900 text-white m-7 px-14 py-7 w-full">
            <h2>Browse the English Grammar</h2>
            <div className="flex flex-wrap w-full">
              {browseGrammars.map((browseGrammar, index) => (
                <BrowseGrammar
                  key={`${browseGrammar.link} ${browseGrammar.name} ${index}`}
                  link={browseGrammar.link}
                  name={browseGrammar.name}
                />
              ))}
            </div>
            <p>
              Or, browse the Cambridge Dictionary <Link to="#">index</Link>
            </p>
          </div>
          <div className="m-7 px-14 w-full">
            <h2>Key features</h2>
            <p>
              Adapted from <span>English Grammar Today</span>, the English
              Grammar provides authentic examples of the way in which grammar is
              used in real-life situations, including standard and non-standard
              varieties of English. Written by a team of leading experts, and
              based on extensive research on the Cambridge English Corpus, it’s
              ideal for intermediate learners of English at CEFR levels B1-B2,
              including anyone preparing for intermediate
              <Link to="#">Cambridge Exams</Link> for schools.
            </p>
            <div className="flex flex-wrap border-b border-gray-300 pb-5">
              {cardsContent.map((cardContent, index) => (
                <CardContent
                  key={`${cardContent.text} ${index}`}
                  text={cardContent.text}
                />
              ))}
            </div>
            <h3>Acknowledgements</h3>
            <p>English Grammar Today: An A–Z of Spoken and Written Grammar</p>
            <p>
              <FontAwesomeIcon icon={faCopyright} />
              Cambridge University Press
            </p>
            <div className="flex  my-7">
              <div className="mr-12">
                <h3 className="font-semibold text-lg">Authors</h3>
                <ul className="list-none">
                  <li>Ronald Carter</li>
                  <li>Michael McCarthy</li>
                  <li>Geraldine Mark</li>
                  <li>Anne O’Keeffe</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Editors, web adaptation
                </h3>
                <ul className="list-none">
                  <li>Ronald Carter</li>
                  <li>Michael McCarthy</li>
                  <li>Geraldine Mark</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Grammar;
