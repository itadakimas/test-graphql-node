const fetch = require("node-fetch");
const graphql = require("graphql");
const queryType = require("./types/query");
  
module.exports = new graphql.GraphQLSchema({ query: queryType });