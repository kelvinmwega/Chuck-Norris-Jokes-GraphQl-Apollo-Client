import gql from "graphql-tag";

export const RANDOM_JOKE = gql`
  query randomJoke($category: String!) {
    joke(category: $category) {
      value
    }
  }
`;
