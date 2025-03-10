import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const useTopRatedMovies = () => {
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
    const dispatch = useDispatch();
    useEffect(() => {
        !topRatedMovies && getTopRatedMovies()
    },[])
    const getTopRatedMovies = async () => {
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS)
            const json = await data.json()
            dispatch(addTopRatedMovies(json.results))
        }catch(error){
            console.error("Top rated movie data is not fetching: ",error)
        }
    }
}
export default useTopRatedMovies;