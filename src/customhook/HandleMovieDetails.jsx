//its the common function to handle movie details for all ,navigate is a callback function that is coming from MovieShowTemplate components

// when this parent event function click or any of inside parent children click 
// it will trigger to this function then function will invoke,this technique is called event delegation(beautifull technique instead of writing many event functions).

export const handleMovieDetails = (navigate, id, path) => {
         navigate(`${path}${id}`);
}