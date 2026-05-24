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

  type Incident {
    id: ID
    type: String
    location: String
    timestamp: String
  }

  type Traffic {
    id: ID
    zone: String
    density: Int
    level: String
    timestamp: String
  }

  type Query {
    me(token: String!): User
    vehicles: [Vehicle]
    incidents: [Incident]
    traffic: [Traffic]
  }

  type Mutation {
    login(email: String!, password: String!): String
  }
`;

module.exports = typeDefs;