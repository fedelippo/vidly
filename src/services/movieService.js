import http from "./httpService";
import config from "../config.json";

const apiAddress = config.apiUrl + "/movies";

export function getMovies() {
  return http.get(apiAddress);
}

export function deleteMovie(movieId) {
  return http.delete(apiAddress + "/" + movieId);
}

export function getMovie(movieId) {
  return http.get(apiAddress + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    // Existing movie
    const body = { ...movie };
    delete body._id;
    return http.put(apiAddress + "/" + movie._id, body);
  }

  // New movie
  return http.post(apiAddress, movie);
}
