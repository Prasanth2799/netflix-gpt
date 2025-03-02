import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.upcomingMovies)
    useEffect(() => {
        !upComingMovies && getUpcomingMovies();
    },[])
    const getUpcomingMovies = async () => {
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS)
            const json = await data.json()
            dispatch(addUpcomingMovies(json.results))
        }catch(error){
            console.error("Upcoming movies data is not fetching: ",error)
        }
    }
}
export default useUpcomingMovies;