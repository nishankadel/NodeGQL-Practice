const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("./db");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const port = 8000;

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(port, () => console.log(`Backend Server Running at ${port}`));
};

startServer();
