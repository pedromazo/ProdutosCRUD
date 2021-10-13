const { ApolloServer, gql } = require('apollo-server');
const database = require('./db');


const typeDefs = gql`
  type Query {
    hello: String
  }
`;

(async () => {
    try {
        await database.sync();
        console.log("Conectado no database com sucesso")
    } catch (error) {
        console.log(error);
    }
})();

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });



