const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers');

//Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//Boot Server
server.listen()
    .then(({ url }) => {
        console.log(`Server ready on url ${url}`);
    })
    .catch((error) => {
        console.log(error)
    });
