const { buildSchema, GraphQLBoolean } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = gql`
  type Event {
    id: ID!
    title: String!
    description: String
    date: String
    attendants: [Person!]
  }

  type Person {
    id: ID!
    name: String!
    age: Int
  }

  type Query {
    events: [Event!]!
    event(id: Int!): Event!
  }
`;

module.exports = schema;
