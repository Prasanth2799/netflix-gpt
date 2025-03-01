import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_iMG } from "../utils/constants";

const GptSearch = () => {
    return(
        <>
        <div className='absolute -z-20 w-screen'>
            <img src={BACKGROUND_iMG} alt='background-image'/>
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
        </>
    )
}
export default GptSearch;