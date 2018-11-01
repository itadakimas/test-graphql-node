const graphql = require("graphql");
const userType = require("./user");
const {
  getUser,
  getUsers
} = require("../databases/typicode");

module.exports = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    user: {
      type: userType,
      args: {
        id: { type: graphql.GraphQLInt }
      },
      resolve(root, { id }) {
        return getUser(id)
      }
    },
    users: {
      type: new graphql.GraphQLList(userType),
      resolve(root, args) {
        return getUsers
      }
    }
  })
});