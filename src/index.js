const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const resolvers = {
  hello: () => "Hello world!",
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
  })
);
app.listen(4000);

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
