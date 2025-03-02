import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({posterPath}) => {
    if(!posterPath) return null
    return(
        <div className="w-48 pr-4">
            <img className="w-full h-full" alt="card-image" src={IMG_CDN_URL+posterPath}/>
        </div>
    )
}
export default MoviesCard;