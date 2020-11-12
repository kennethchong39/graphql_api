const { ApolloServer, gql } = require('apollo-server');

// Schema - define the types of the data
const typeDefs = gql`
  type Movie {
    title: String
    releaseDate: String
    rating: Int
  }

  # Query - type to describe an event that pulls data
  type Query {
    movies: [Movie]
  }
`;

// Data
const movies = [
  {
    title: '5 Deadly Venoms',
    releaseDate: '10-10-1983',
    rating: 5,
  },
  {
    title: '36th Chamber',
    releaseDate: '10-10-1983',
    rating: 5,
  },
];

// Resolvers
const resolvers = {
  Query: {
    movies: () => {
      return movies;
    },
  },
};
