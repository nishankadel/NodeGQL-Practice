const { gql } = require("apollo-server-express");

const typeDefs = gql(`

type Post{
    id:ID,
    title:String
    description:String
}

type Query {
    getAllPost:[Post]
    getSinglePost(id:String):Post
}


input PostInput{
    title:String
    description:String
}

type Mutation{
    createPost(post:PostInput):Post
    updatePost(id:String, post:PostInput): Post
    deletePost(id:String):String
}
`);

module.exports = typeDefs;