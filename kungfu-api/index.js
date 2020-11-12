const { ApolloServer, gql } = require('apollo-server');

// Schema - define the types of the data
const typeDefs = gql`
  enum Status {
    WATCHED
    INTERESTED
    NOT_INTERESTED
    UNKNOWN
  }

  type Actor {
    id: ID
    name: String
  }

  type Movie {
    id: ID
    title: String
    releaseDate: String
    rating: Int
    status: Status
    actor: [Actor]
    # fake: Float
    # fake: Boolean
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
    status: 'INTERESTED',
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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server started at ${url}`);
});
