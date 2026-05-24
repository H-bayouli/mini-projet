const axios = require("axios");
const jwt = require("jsonwebtoken");

const AUTH = "http://localhost:4001/auth";
const VEHICLE = "http://localhost:4002/vehicles";
const TRAFFIC = "http://localhost:4003/traffic";
const INCIDENT = "http://localhost:4004/incidents";

module.exports = {
  Query: {
    vehicles: async () => {
      const res = await axios.get(VEHICLE);
      return res.data;
    },

    incidents: async () => {
      const res = await axios.get(INCIDENT);
      return res.data;
    },

    traffic: async () => {
      const res = await axios.get(`${TRAFFIC}`);
      return res.data;
    },

    me: (_, { token }) => jwt.decode(token),
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const res = await axios.post(`${AUTH}/login`, {
        email,
        password,
      });

      return res.data.token;
    },
  },
};