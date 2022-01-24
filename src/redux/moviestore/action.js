//import action type 
import {
    MOVIELOADING,
    MOVIETHEATREDATA,
    POPULARMOVIEDATA,
    POPULARKIDMOVIEDATA,
    BESTDRAMAMOVIEDATA,
    ALLMOVIEDETAILS,
    MOVIEERROR
} from "./actionType";

//Action dispatcher function to the reducer and coming from customhook usefetch 
export const movieLoading = (loaddata) => (
    { type: MOVIELOADING, payload: loaddata }
);

export const movieTheatreSuccess = (theatredata) => (
    { type: MOVIETHEATREDATA, payload: theatredata }
);

export const popularMovieSuccess = (populardata) => (
    { type: POPULARMOVIEDATA, payload: populardata }
);

export const popularKidMovieSuccess = (popularkiddata) => (
    { type: POPULARKIDMOVIEDATA, payload: popularkiddata }
);

export const bestDramaMovieSuccess = (dramadata) => (
    { type: BESTDRAMAMOVIEDATA, payload: dramadata }
);

export const allMovieDetailsSuccess = (moviedetails) => (
    { type: ALLMOVIEDETAILS, payload: moviedetails }
);

export const movieError = (errormovie) => (
    { type: MOVIEERROR, payload: errormovie }
);
