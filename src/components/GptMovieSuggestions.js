import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestions = () => {
    const {movieNames, movieResults} = useSelector(store => store.gpt)
    console.log(movieNames.split(","))
    if(!movieNames) return null

    return(
        <div className="bg-black p-4 m-4 text-white">
            <div className="overflow-auto h-screen">
            {movieNames.split(",").map((movieName,index) => (
                <MoviesList key={movieName} title={movieName} movies={movieResults[index]} />
            ))}
            </div>
        </div>
    )
}
export default GptMovieSuggestions;