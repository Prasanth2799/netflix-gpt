import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store=>store.config.lang)
    const searchText = useRef(null)
    const handleSearchGpt = async () => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = "Act as a movie recommendation system and suggest some movie names for the query :" +
      searchText.current.value +
      ", give only six movie names, comma seperated. For example Salaar, Vikram, KGF, Baahubali: The Beginning, Pushpa, URI";

    const result = await model.generateContent(prompt);
    const gptResponse = result.response.text();
    if(!gptResponse){
        return console.error("Gpt data is not fetching")
    }
    const gptMovies = gptResponse.split(",")
    const moviesPromiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    const tmdbMoviesData = await Promise.all(moviesPromiseArray)
    dispatch(addGptMovies({movieNames : gptResponse, movieResults : tmdbMoviesData}))
    }
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json = await data.json()
        return json.results
    }
    return(
        <div className="pt-36 flex justify-center">
            <form className="grid grid-cols-12 w-1/2 bg-black" onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={searchText} placeholder={lang[langKey].gptPlaceHolder} className="p-2 m-2 rounded-sm border-red-500 col-span-9"/>
                <button className="p-2 m-2 rounded bg-red-600 col-span-3 text-white" onClick={handleSearchGpt}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;