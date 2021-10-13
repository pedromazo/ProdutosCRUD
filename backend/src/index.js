const { ApolloServer, gql } = require('apollo-server');

// 1
const typeDefs = gql`
  type Query {
    info: String!
  }
`;

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of the CRUD App`
  }
};



// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );