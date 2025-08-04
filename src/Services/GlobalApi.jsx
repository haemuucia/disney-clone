import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = '96cc9e9b1594c4c1f8b9089cf1b2eb54'
//https://api.themoviedb.org/3/list/1?api_key=96cc9e9b1594c4c1f8b9089cf1b2eb54&language=en-US
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=96cc9e9b1594c4c1f8b9089cf1b2eb54&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='

const getTrendingVideos = () => {
    axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
};

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}