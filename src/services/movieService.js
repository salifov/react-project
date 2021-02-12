import * as genresAPI from "./genreService";

const movies = [
  {
    _id: "123asasdg13ag2",
    title: "Die Hard",
    genre: { _id: "1", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 8,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "123asgasg13ag2",
    title: "Zoolander",
    genre: { _id: "2", name: "Comedy" },
    numberInStock: 3,
    dailyRentalRate: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "123asgasg1123ag2",
    title: "The Trial of the Chicago 7",
    genre: { _id: "3", name: "Drama" },
    numberInStock: 16,
    dailyRentalRate: 5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "123asgasg2113ag2",
    title: "The Lovebirds",
    genre: { _id: "4", name: "Romantic" },
    numberInStock: 62,
    dailyRentalRate: 3,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "123asgasg1213ag2",
    title: "Gone Girl",
    genre: { _id: "5", name: "Thriller" },
    numberInStock: 45,
    dailyRentalRate: 4,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}