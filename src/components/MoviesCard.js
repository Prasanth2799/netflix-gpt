import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({posterPath}) => {
    return(
        <div className="w-48 pr-4">
            <img alt="card-image" src={IMG_CDN_URL+posterPath}/>
        </div>
    )
}
export default MoviesCard;