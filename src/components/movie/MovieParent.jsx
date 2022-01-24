import { PopularMovie } from "./PopularMovie";
import { MovieInTheatre } from "./MovieInTheatre";
import { PopularKidMovie } from "./PopularKidMovie";
import { BestDramaMovie } from "./BestDramaMovie";
import "./movie.css";
export const MovieParent = () => {
    return (
        <>
            <div className="movie__heading-genre">
                <h4>Popular movie</h4>
                <PopularMovie />
            </div>

            <div className="movie__heading-genre">
                <h4>Best drama movie</h4>
                <BestDramaMovie />
            </div>

            <div className="movie__heading-genre">
                <h4>Popular kid movie</h4>
                <PopularKidMovie />
            </div>

            <div className="movie__heading-genre">
                <h4>Movie in theatre</h4>
                <MovieInTheatre />
            </div>

        </>
    )
}