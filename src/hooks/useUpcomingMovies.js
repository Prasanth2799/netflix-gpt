import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUpcomingMovies();
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