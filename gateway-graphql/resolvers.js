const axios = require("axios");
const jwt = require("jsonwebtoken");

const AUTH_URL = "http://localhost:4001/auth";

const resolvers = {
  Query: {
    me: (_, { token }) => {
      return jwt.decode(token);
    },

    vehicles: async () => {
      const res = await axios.get("http://localhost:4002/vehicles");
      return res.data;
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const res = await axios.post(`${AUTH_URL}/login`, {
        email,
        password,
      });

      return res.data.token;
    },
  },
};

module.exports = resolvers;