import { API_OPTIONS, NOWPLAYING_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from "../utils/moviesSlice"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    const dispatch = useDispatch();
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies()
  },[])
  const getNowPlayingMovies = async () => {
    try{
      const data = await fetch(NOWPLAYING_API, API_OPTIONS)
      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }catch(error){
      console.error("Data is not fetching: ", error)
    }
  }
}
export default useNowPlayingMovies;