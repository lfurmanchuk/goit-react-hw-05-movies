import axios from 'axios';

export const API_KEY = 'df78735ee8c7ed795312de547d54cbd3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, params);

  return data;
};

export const getSearchMovies = async movie => {
  const { data } = await axios.get(`search/movie?query=${movie}`, params);

  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, params);

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, params);

  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, params);

  return data;
};
