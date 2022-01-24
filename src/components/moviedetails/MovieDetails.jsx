import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allMovieDetailsSuccess } from "../../redux/moviestore/action";
import { useMovieDetailsFetch } from "../../customhook/useFetch";
import { baseOmdbUrl, apiKey } from "../../utility";
import { MovieDetailsTemplate } from "./MovieDetailsTemplate";
export const MovieDetails = () => {
    const { movie_id } = useParams();
    const popularMovieDetailsUrl = `${baseOmdbUrl}/movie/${movie_id}?api_key=${apiKey}&language=en-US`;

    useMovieDetailsFetch(popularMovieDetailsUrl, allMovieDetailsSuccess);

    //get popular movie details from the redux store
    const {
        movieData: {
            allMovieDetails: {
                overview, release_date, title, runtime, vote_average, genres, spoken_languages, poster_path, production_companies
            }
        }
    } = useSelector(store => store.moviealldata);

    return (
        <>
            <div>
                <MovieDetailsTemplate
                    overview={overview}
                    release_date={release_date}
                    title={title}
                    runtime={runtime}
                    vote_average={vote_average}
                    genres={genres}
                    spoken_languages={spoken_languages}
                    poster={poster_path}
                    company={production_companies}
                />
            </div>
        </>
    )
}