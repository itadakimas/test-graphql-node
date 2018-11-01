const graphql = require("graphql");

module.exports = new graphql.GraphQLObjectType({
  name: "Address",
  fields: {
    street: {
      type: graphql.GraphQLString,
      resolve: address => address.street
    },
    suite: {
      type: graphql.GraphQLString,
      resolve: address => address.suite
    },
    city: {
      type: graphql.GraphQLString,
      resolve: address => address.city
    }
  }
});