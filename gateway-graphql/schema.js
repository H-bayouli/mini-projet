const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    role: String
  }

  type Vehicle {
    id: ID
    plate_number: String
    type: String
  }

  type Query {
    me(token: String!): User
    vehicles: [Vehicle]
  }

  type Mutation {
    login(email: String!, password: String!): String
  }
`;

module.exports = typeDefs;