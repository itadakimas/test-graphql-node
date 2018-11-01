const graphql = require("graphql");
const addressType = require("./address");

module.exports = new graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: graphql.GraphQLInt,
      resolve: user => user.id
    },
    name: {
      type: graphql.GraphQLString,
      resolve: user => user.name
    },
    address: {
      type: addressType,
      resolve: user => user.address
    }
  }
});