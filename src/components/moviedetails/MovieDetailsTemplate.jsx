import "./moviedetail.css"
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export const MovieDetailsTemplate = ({ overview, release_date, title, runtime, vote_average, genres, spoken_languages, poster, company }) => {
    return (
        <>
            <div className="movie__details-parent">
                <div className="movie__details-child-1">
                    <img src={`https://image.tmdb.org/t/p/original${poster}`} alt={title} />
                </div>
                <div className="movie__details-child-2">
                    <div className="movie__details-child-2__heading">
                        <div>{title}</div>
                        <div>{vote_average}<StarIcon /></div>
                    </div>
                    <div>
                        {release_date} | {runtime}
                    </div>
                    <h5>Overview</h5>
                    <p>{overview}</p>
                    <div>Genres</div>
                    <div className="movie__details-child-2__movie-details">
                        {genres === undefined ? null : genres.map(({ name }) => {
                            return <p>{name},</p>
                        })}
                    </div>
                    <div>Languages</div>
                    <div className="movie__details-child-2__movie-details">
                        {spoken_languages === undefined ? null : spoken_languages.map(({ name }) => {
                            return <p>{name},</p>
                        })}
                    </div>
                    <div>Created by</div>
                    <div className="movie__details-child-2__movie-details">
                        {company === undefined ? null : company.map(({ name }) => {
                            return <p>{name}</p>
                        })}
                    </div>

                    <div className="movie__details-child-2__play-btn">
                        <button> <PlayArrowIcon /> Watch Now </button>
                    </div>
                </div>
            </div>
        </>
    )
}