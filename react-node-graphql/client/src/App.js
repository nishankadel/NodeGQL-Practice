import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { getAllPost } from "./GraphQL/Query";
import { CREATE_POST, DELETE_POST } from "./GraphQL/Mutation";

const App = () => {
  const [createPost] = useMutation(CREATE_POST);
  const [deletePost] = useMutation(DELETE_POST);

  const { loading, error, data } = useQuery(getAllPost);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (loading) return "Loading";
  if (error) return "Error";

  const addPost = (e) => {
    e.preventDefault();
    createPost({
      variables: {
        title: title,
        description: description,
      },
    });
    setTitle("");
    setDescription("");
    window.location.reload(false);
  };

  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });
    window.location.reload(false);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          addPost(e);
        }}
      >
        <label htmlFor="title">Title:</label> <br />
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description:</label> <br />
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Add Post</button>
      </form>
      <br />
      {data.getAllPost.map((data) => (
        <div key={data.id}>
          <button
            type="submit"
            onClick={() => {
              removePost(data.id);
            }}
          >
            Delete
          </button>
          <br />
          <label>{data.title}</label>
          <p>{data.description}</p>

          <br />
        </div>
      ))}
    </>
  );
};

export default App;
