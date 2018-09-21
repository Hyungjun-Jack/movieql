import {
  movies,
  people,
  getById,
  getMovies,
  addMovie,
  getMovieById,
  deleteMovie,
  getMovie,
  getSuggestions
} from "./db";

const resolvers = {
  Query: {
    //people: () => people,
    //person: (_, { id }) => getById(id),
    //movies: () => movies,
    //movie: (_, { id }) => getMovieById(id)
    movies: (_, {rating, limit}) => getMovies(limit, rating),
    movie:(_, {id}) => getMovie(id),
    suggestions: (_, {id}) => getSuggestions(id)
  }//,
  //Mutation: {
    //addMovie: (_, { name, score }) => addMovie(name, score),
    //deleteMovie: (_, { id }) => deleteMovie(id)
  //}
};

export default resolvers;
