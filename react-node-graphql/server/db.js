const mongoose = require('mongoose');

// CONNECT MONGODB ATLAS
const url = "mongodb://localhost:27017/React-Node-GraphQL";

// connection params
const connectionParams = {
useNewUrlParser: true,
useUnifiedTopology: true,
};

// connect mongodb
mongoose
  .connect(url, connectionParams)
  .then(() => console.log(`Connection to the DB is Successful.`))
  .catch((err) => console.log(`Connection to the DB is Broken.|| ${err}`));