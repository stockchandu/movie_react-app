import {
    MOVIELOADING,
    MOVIETHEATREDATA,
    POPULARMOVIEDATA,
    POPULARKIDMOVIEDATA,
    BESTDRAMAMOVIEDATA,
    ALLMOVIEDETAILS,
    MOVIEERROR
} from "./actionType";

const movieInitStore = {
    movieData: {
        movieLoading: false,
        movieTheatreData: [],
        popularKidMovieData: [],
        popularMovieData: [],
        bestDramaMovieData: [],
        allMovieDetails: {},
        movieError: false,
    }
}

// movie reducer ,its a pure function ,receive data and update existing without sideeefect and send to main store of redux
export const movieReducer = (state = movieInitStore, { type, payload }) => {
    switch (type) {
        case MOVIELOADING:
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    movieLoading: true,
                }

            }
        case MOVIETHEATREDATA:
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    movieLoading: false,
                    movieTheatreData: payload
                }

            }

        case POPULARMOVIEDATA:
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    movieLoading: false,
                    popularMovieData: payload
                }

            }
        case POPULARKIDMOVIEDATA:
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    movieLoading: false,
                    popularKidMovieData: payload
                }

            }
        case BESTDRAMAMOVIEDATA:
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    movieLoading: false,
                    bestDramaMovieData: payload
                }
            }
        case ALLMOVIEDETAILS:
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    movieLoading: false,
                   allMovieDetails: payload
                }
            }

        case MOVIEERROR:
            return {
                ...state,
                movieData: {
                    ...state.movieData,
                    movieLoading: false,
                    movieError: true
                }
            }

        default:
            return {
                ...state
            }
    }

}