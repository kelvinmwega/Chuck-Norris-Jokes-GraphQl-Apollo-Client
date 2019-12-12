import * as React from "react";
import { useRandomJokeQuery } from "../../generated/graphql";
import RandomJoke from "./randomJoke";

interface OwnProps {
  category: string;
}

const RandomnJokeContainer = ({ category }: OwnProps) => {
  const { data, error, loading, refetch } = useRandomJokeQuery({
    variables: { category: category }
  });
  React.useEffect(() => {
    refetch();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Got Jokes? ... Coz I don't :-(</div>;
  }

  if (!data) {
    return <div>Got Jokes? ... Coz I don't :-(</div>;
  }

  return <RandomJoke data={data} />;
};

export default RandomnJokeContainer;
