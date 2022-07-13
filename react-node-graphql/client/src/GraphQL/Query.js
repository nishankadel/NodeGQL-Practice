import { gql } from "@apollo/client";

export const getAllPost = gql`
  query getAllPost {
    getAllPost {
      id
      title
      description
    }
  }
`;
