import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const people = [
  {
    id: 0,
    name: "Hyungjun Kim",
    age: 44,
    gender: "male"
  },
  {
    id: 1,
    name: "Hyungjun Kim1",
    age: 45,
    gender: "male1"
  },
  {
    id: 2,
    name: "Hyungjun Kim2",
    age: 46,
    gender: "male2"
  },
  {
    id: 3,
    name: "Hyungjun Kim3",
    age: 47,
    gender: "male3"
  },
  {
    id: 4,
    name: "Hyungjun Kim4",
    age: 48,
    gender: "male4"
  },
  {
    id: 5,
    name: "Hyungjun Kim5",
    age: 49,
    gender: "male5"
  },
  {
    id: 6,
    name: "Hyungjun Kim6",
    age: 50,
    gender: "male6"
  }
];

export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

//export const getMovies = () => movies;
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: {movies}
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
}

export const getMovie = async id => {
  const {
    data: {
      data: {movie}
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
}

export const getSuggestions = async id => {
  const {
    data: {
      data: {movies}
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
}

export const getById = id => {
  const filteredPerson = people.filter(person => person.id === id);
  return filteredPerson[0];
};

export const getMovieById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
