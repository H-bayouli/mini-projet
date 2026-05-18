const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

async function start() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(5000, () => {
    console.log("GraphQL Gateway running on http://localhost:5000/graphql");
  });
}

start();