import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_iMG } from "../utils/constants";

const GptSearch = () => {
    return(
        <>
        <div className='fixed -z-10'>
            <img src={BACKGROUND_iMG} alt='background-image' className="h-screen object-cover md:w-screen"/>
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
        </>
    )
}
export default GptSearch;