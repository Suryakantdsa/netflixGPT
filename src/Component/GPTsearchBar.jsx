import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import openai from "../utils/openai";
import API_OPTIONS from "../utils/constant";
import { addGPTmoviesResult } from "../store/gptSlice";

const GPTsearchBar = () => {
  const langType = useSelector((store) => store.appConfig?.lang);
  const [isSearching,setIsSearching]=useState(false)
  const dispatch=useDispatch()
  const searchText = useRef(null);
  const searchTMDBmovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
  
    return json.results;
  };
  
  const handleSearchclick = async () => {
    console.log(searchText.current.value);
    setIsSearching(true)
    // Make an API call to openai and get movie result
    const searchContent = `Act as a Movie Recommendation system and suggest some movies for the query :${searchText.current.value} only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;
  
    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchContent }],
      model: "gpt-3.5-turbo",
    });
  
    const gptMovieResult = getResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovieResult.map((movie) => searchTMDBmovie(movie));
    console.log(promiseArray);
  
    // Now, promiseArray contains an array of promises.
    // You can await Promise.all to get the results when all promises are resolved.
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    setIsSearching(false)
    dispatch(addGPTmoviesResult({name:gptMovieResult,movieArr:tmdbResults}))
  };
  
  return (
    <div className="flex justify-center md:pt-[12%] pt-[30%] ">
      <form
        className="bg-black md:px-6 md:py-8 px-4 py-4 grid grid-cols-12 md:w-2/3 w-screen md:text-lg md:rounded-lg mx-6"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langType]?.placeHolder}
          className="md:col-span-10 col-span-8 md:px-4 md:py-4 px-4 outline-none border-none"
        />
        <button
          className="md:col-span-2 col-span-4 bg-red-600 text-white p-2 ml-2 "
          onClick={handleSearchclick}>
            {isSearching? "Loading ...":
              <>
              {lang[langType]?.search}
              <i className="fa-solid fa-magnifying-glass pl-2"></i>
                </>
            }
          
        </button>
      </form>
     
    </div>
  );
};

export default GPTsearchBar;
