import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//import components
import { MovieParent } from "../movie/MovieParent";
import { Navbar } from "../navbar/Navbar";
import { MovieDetails } from "../moviedetails/MovieDetails";
import { PopularMovie } from "../movie/PopularMovie";

//import movie details endpoints from utility
import {
    MovieDetailsEndpoints,
    popularMovieEndpoints
} from "../../utility";

export const Home = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<MovieParent />}
                    />
                </Routes>
                <Routes>
                    <Route
                        path={`${MovieDetailsEndpoints}:movie_id`}
                        element={<MovieDetails />}
                    />
                </Routes>
                <Routes>
                    <Route
                        path={`${popularMovieEndpoints}`}
                        element={<PopularMovie />}
                    />
                </Routes>
            </BrowserRouter>

        </>
    )
}