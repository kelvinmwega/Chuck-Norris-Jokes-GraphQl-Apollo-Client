import gql from "graphql-tag";

export const QUERY_JOKES_CATEGORIES = gql`
  query jokesCategories {
    categories
  }
`;
