import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = 'YOUR_API_KEY' //change to your API key from TMDB

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='

const getTrendingVideos = () => {
    return axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
};

const getMovieByGenreId = (id) =>
     axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
    getTrendingVideos,
    getMovieByGenreId
}
