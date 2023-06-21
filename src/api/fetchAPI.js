import axios from 'axios';

const API_KEY = "1c8f6b064eb2a1f6bd306bc5a0f759ec";

export const fetchMoviesByQuery = async(query, page) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}&api_key=${API_KEY}`
    )
    return response;
}

export const fetchTrendingMovies = async() => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    )
    return response;
}

export const fetchMovieById = async(id) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    )
    return response;
}

export const fetchReviewsById = async(id) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
    )
    return response;
}

export const fetchCastById = async(id) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    )
    return response;
}