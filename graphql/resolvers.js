import {movies, people, getById, getMovies} from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id}) => getById(id),
    movies: () => movies,
    movie: (_, {id}) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, {name, score}) => 
  }
};

export default resolvers;
