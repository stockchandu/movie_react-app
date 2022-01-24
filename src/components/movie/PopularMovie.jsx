import { useSelector } from "react-redux";
import { popularMovieSuccess } from "../../redux/moviestore/action";
import { popularMovieUrl, MovieDetailsEndpoints } from "../../utility";
import { useFetch } from "../../customhook/useFetch";
import { handleMovieDetails } from "../../customhook/HandleMovieDetails";
import { MovieShowTemplate } from "./MovieShowTemplate";
import "./movie.css";

export const PopularMovie = () => {
    //custom fetch api function
    useFetch(popularMovieUrl, popularMovieSuccess);
    //get popular movie data from the redux store
    const {
        movieData: {
            popularMovieData
        }
    } = useSelector(store => store.moviealldata)

    return (
        <>
            <div className="movie__parent">
                {
                    popularMovieData.map(({ overview, poster_path, release_date, vote_count, vote_average, id }) => {
                        return <MovieShowTemplate
                            overview={overview}
                            poster_path={poster_path}
                            release_date={release_date}
                            vote_count={vote_count}
                            vote_average={vote_average}
                            handleMovieDetails={handleMovieDetails}
                            id={id}
                            path={MovieDetailsEndpoints}
                        />
                    })
                }
            </div>
        </>
    )
}