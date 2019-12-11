import * as React from "react";
import { useJokesCategoriesQuery } from "../../generated/graphql";
import Categories, { OwnProps } from "./joke";

const JokeContainer = (props: OwnProps) => {
  const { data, error, loading } = useJokesCategoriesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Categories data={data} {...props} />;
};

export default JokeContainer;
