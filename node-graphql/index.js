const express = require("express");
const { graphql, buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

let database = "This is my current database.";
const app = express();

const port = 8000;

const schema = buildSchema(`

type User{
  name:String
  age:Int
  college:String
}

    type Query {
      hello: String
    welcomeMessage (name: String, age: Int): String
    getUser:User
    getAllUsers:[User]
    }
  
    type Mutation{
      update(message:String):String!
    }
`);

const root = {
  hello: () => {
    return "Hello world";
  },
  welcomeMessage: (args) => {
    return `Name is ${args.name}. He is ${args.age} years old.`;
  },
  getUser: () => {
    return {
      name: "Kadel",
      age: 12,
      college: "IIC",
    };
  },
  getAllUsers: () => {
    return [
      {
        name: "Kadel",
        age: 12,
        college: "IIC",
      },
      {
        name: "Kadel",
        age: 12,
        college: "IIC",
      },
      {
        name: "Kadel",
        age: 12,
        college: "IIC",
      },
      {
        name: "Kadel",
        age: 12,
        college: "IIC",
      },
      {
        name: "Kadel",
        age: 12,
        college: "IIC",
      },
    ];
  },
  update: (args) => {
    database = args.message;
    return database; 
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
  })
);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.listen(port, () => console.log(`Backend Server Running at ${port}`));
