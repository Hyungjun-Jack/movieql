import {
  movies,
  people,
  getById,
  getMovies,
  addMovie,
  getMovieById,
  deleteMovie
} from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: () => movies,
    movie: (_, { id }) => getMovieById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
