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
import CardArticle from "../../components/cards-article";
import WordOfTheDay from "../../components/card-word-ofthe-day";
import { wordOfTheDay } from "../../mocks/card-word-of-the-day";
import Footer from "../../components/footer";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Grammar = () => {
  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white px-5">
        <div className=" flex items-center justify-between w-full ">
          <div className="flex item-center h-full">
            <div className="sm:border-r-0 md:border-r border-gray-400 pr-5 py-5">
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </div>
            <div className="md:flex items-center font-semibold sm:hidden">
              <Link to="#" className="mx-5">
                Dictionary
              </Link>
              <Link to="#">Translate </Link>
              <Link to="#" className="mx-5">
                Grammar
              </Link>
              <Link to="#">Thesaurus </Link>
              <Link to="#" className="ml-5">
                +Plus
              </Link>
            </div>
          </div>
          <div className="flex item-center">
            <div className="lg:flex  items-end sm:hidden">
              <Link to="https://www.facebook.com/CUPCambridgeDictionary/">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link
                to="https://www.instagram.com/cambridgewords/"
                className="mx-5"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="https://twitter.com/CambridgeWords">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
            <div className="mx-7 flex">
              <Link to="#" className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-sm" />
                <p className="text-lg sm:hidden md:flex"> Log in / Sign up</p>
              </Link>
            </div>
            <div className="text-light flex items-center">
              <FontAwesomeIcon icon={faEarthAfrica} className="mr-2 text-sm" />
              <p className="text-lg sm:hidden	lg:flex">English (UK)</p>
              <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-sm" />
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
            <p className="text-white mt-1 text-lg text-center"> Grammar</p>
          </div>
          <div className="w-[68%] my-16">
            <InputSearch />
            <div className="flex items-center  mt-8">
              <Button
                name="English"
                bg="bg-fuchsia-800"
                bgHover="hover:bg-fuchsia-900"
                textHover="hover:text-rose-100"
              />
              <Button
                name="English-Russian"
                mx="mx-3"
                bg="bg-fuchsia-800"
                bgHover="hover:bg-fuchsia-900"
                textHover="hover:text-rose-100"
              />
              <Button
                name="English-Polish"
                bg="bg-fuchsia-800"
                bgHover="hover:bg-fuchsia-900"
                textHover="hover:text-rose-100"
              />
              <Button
                name="English-German"
                mx="mx-3"
                bg="bg-fuchsia-800"
                bgHover="hover:bg-fuchsia-900"
                textHover="hover:text-rose-100"
              />
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
          <div className="m-7 px-14 ">
            <h2 className="mt-10 mb-5 text-3xl font-light">
              Explore the English Grammar
            </h2>
            <p className="text-lg">
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
              <h2 className="text-2xl font-light mb-4">Popular searches</h2>
              <ol className="grid grid-cols-2 gap-2.5  list-inside font-semibold">
                <Link to="#">
                  <li>
                    <span className="mr-1 font-light">01</span>
                    Determiners (
                    <span className="italic">the, my, some, this</span>)
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <span className="mr-1 font-light">02</span>Table of
                    irregular verbs
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <span className="mr-1 font-light">03</span>Word classes and
                    phrase classes
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    {" "}
                    <span className="mr-1 font-light">04</span>Past continuous
                    or past simple?
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    {" "}
                    <span className="mr-1 font-light">05</span>Dates
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <span className="mr-1 font-light">06</span>
                    As, <span>when or while?</span>
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <span className="mr-1 font-light">07</span>
                    <span>Since</span>
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    {" "}
                    <span className="mr-1 font-light">08</span>Adverbs and
                    adverb phrases: position
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <span className="mr-1 font-light">09</span>
                    <span>Ought to</span>
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    {" "}
                    <span className="mr-1 font-light">10</span>Inversion
                  </li>
                </Link>
              </ol>
            </div>
          </div>
          <div className="bg-indigo-900 text-white m-7 px-14 py-7 w-full">
            <h2 className="text-3xl font-light">Browse the English Grammar</h2>
            <div className="flex flex-wrap w-full my-5">
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
            <h2 className="text-3xl font-light mt-10 mb-5">Key features</h2>
            <p className="mb-7 text-lg">
              Adapted from <span className="italic">English Grammar Today</span>
              , the English Grammar provides authentic examples of the way in
              which grammar is used in real-life situations, including standard
              and non-standard varieties of English. Written by a team of
              leading experts, and based on extensive research on the Cambridge
              English Corpus, it’s ideal for intermediate learners of English at
              CEFR levels B1-B2, including anyone preparing for intermediate
              <Link to="#" className="underline">
                Cambridge Exams
              </Link>
              for schools.
            </p>
            <div className="flex flex-wrap border-b border-gray-300 pb-5">
              {cardsContent.map((cardContent, index) => (
                <CardContent
                  key={`${cardContent.text} ${index}`}
                  text={cardContent.text}
                />
              ))}
            </div>
            <h3 className="mt-10 mb-5 text-3xl font-light">Acknowledgements</h3>
            <p className="italic text-lg">
              English Grammar Today: An A–Z of Spoken and Written Grammar
            </p>
            <p className="mb-10">
              <FontAwesomeIcon icon={faCopyright} className="text-xs mr-1" />
              Cambridge University Press
            </p>
            <div className="flex  my-7">
              <div className="mr-12">
                <h3 className="font-semibold text-lg">Authors</h3>
                <ul className="list-none text-lg">
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
            <div className="mt-14">
              <CardArticle
                picture="https://dictionary.cambridge.org/rss/images/back.jpg"
                chapter="BLOG"
                title="Watch your back! Idioms with the word ‘back’"
                date="March 01, 2023"
                link="#"
                button={
                  <Button
                    name="Read More"
                    bg="bg-indigo-900"
                    bgHover="hover:bg-slate-800"
                  />
                }
              />
              <WordOfTheDay
                word={wordOfTheDay.word}
                transliterationUK={wordOfTheDay.transliterationUK}
                transliterationUS={wordOfTheDay.transliterationUS}
                text={wordOfTheDay.text}
                button={
                  <Button
                    name="About this"
                    bg="bg-indigo-900"
                    bgHover="hover:bg-slate-800"
                  />
                }
              />

              <CardArticle
                picture="	https://dictionary.cambridge.org/rss/images/resilience-hub-1024x683-2.jpg"
                chapter="NEW WORDS"
                title="resilience hub"
                date="March 06, 2023"
                link="#"
                button={
                  <Button
                    name="More new words"
                    bg="bg-indigo-900"
                    bgHover="hover:bg-slate-800"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-900 w-full flex justify-center p-5 mt-12">
        <div className=" w-[95%]">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Grammar;
