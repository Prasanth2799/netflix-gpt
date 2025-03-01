import { useEffect } from "react"
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
        useEffect(() => {
            getMovieVideos()
        },[])
        const getMovieVideos = async () => {
            try{
                const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
                const json = await data.json();
                const filterData = json.results?.filter(trailer => trailer.type === "Trailer")
                const trailer = filterData.length ? filterData[0] : json.results[0]
                dispatch(addTrailerVideo(trailer))
            }catch(error){
                console.error("Movie trailer Data is not fetching" , error)
            }
        }
}
export default useMovieTrailer;