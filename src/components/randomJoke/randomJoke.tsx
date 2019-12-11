import * as React from "react";
import { RandomJokeQuery } from "../../generated/graphql";
import "./styles.css";

interface Props {
  data: RandomJokeQuery;
}

const className = "RandomJoke";

const RandomJoke: React.FC<Props> = ({ data }) => {
  if (!data.joke) {
    return <div>No Jokes Today, Get a life...</div>;
  }

  return (
    <div className={className}>
      {data.joke && data.joke.value && (
        <p className={`${className}__status`}>{data.joke.value}</p>
      )}
    </div>
  );
};

export default RandomJoke;
