//The moviedb base url 
export const baseOmdbUrl = "https://api.themoviedb.org/3";
//API key ,put your the moviedb API key
export const apiKey = "797ecf7e8da7fb4defe7d3053187dbe6";

//API url for best drama movie
export const bestDramaUrl = `${baseOmdbUrl}/discover/movie?with_genres=18&sort_by=vote_average.desc&api_key=${apiKey}`;

//API url for movie in theatre
export const movieInTheatreUrl = `${baseOmdbUrl}/discover/movie?primary_release_date.gte=2021-12-15&primary_release_date.lte=2022-10-22&api_key=${apiKey}`;

//API url for popular kid movie
export const popularKidMovieUrl = `${baseOmdbUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${apiKey}`;

//API url for popular movie
export const popularMovieUrl = `${baseOmdbUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

//popular movie endpoints
export const popularMovieEndpoints = "popular_movie";

//all movie details url enpoints
export const MovieDetailsEndpoints = "/movie_details/";

















//Base url of omdb api
//https://api.themoviedb.org/3/movie/550?api_key=797ecf7e8da7fb4defe7d3053187dbe6

//What movies are in theatres?
// URL: /discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2022-10-22

//get movies details by ID
//https://api.themoviedb.org/3/movie/580489?api_key=797ecf7e8da7fb4defe7d3053187dbe6&language=en-US

// What are the most popular movies?
// URL: https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=797ecf7e8da7fb4defe7d3053187dbe6

// What are the highest rated movies rated R?
// URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

// What are the most popular kids movies?
// URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

// What is are the best movies from 2010?
// URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

// What are the best dramas that were released this year?
// URL: /discover/movie?with_genres=18&primary_release_year=2014

// What are the highest rated science fiction movies that Tom Cruise has been in?
// URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc

// What are the Will Ferrell's highest grossing comedies?
// URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc

// Have Brad Pitt and Edward Norton ever been in a movie together?
// URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc

// Has David Fincher ever worked with Rooney Mara?
// URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc

// What are the best drama's?
// URL: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10

// What are Liam Neeson's highest grossing rated 'R' movies?
// URL: /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896