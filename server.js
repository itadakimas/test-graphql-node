const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();
const schema = require("./schema");
const port = 3000;

app.use("/", expressGraphQL({ schema, graphiql: true }));
app.listen(port, () => console.log(`server started on port ${port}`));