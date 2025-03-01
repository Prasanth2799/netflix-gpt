import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryConatiner'
const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : (
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse