import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies)
    return (
        movies.nowPlayingMovies && movies.popularMovies && movies.upcomingMovies && movies.topRatedMovies && (
            <div className="bg-black w-screen mt-52 md:mt-0">
            <div className="-mt-52 md:pl-12 pl-4 relative z-20">
            <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <MoviesList title={"Popular"} movies={movies?.popularMovies}/>
            <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies}/>
            <MoviesList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
            </div>
        </div>
        )
    )
}
export default SecondaryContainer;