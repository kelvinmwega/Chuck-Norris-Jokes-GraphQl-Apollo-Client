import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Joke = {
   __typename?: 'Joke',
  id: Scalars['ID'],
  value: Scalars['String'],
  url?: Maybe<Scalars['String']>,
  icon_url?: Maybe<Scalars['String']>,
  categories?: Maybe<Array<Scalars['String']>>,
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['String']>,
  joke?: Maybe<Joke>,
  categories?: Maybe<Array<Scalars['String']>>,
};


export type QueryJokeArgs = {
  category: Scalars['String']
};


export type JokesCategoriesQueryVariables = {};


export type JokesCategoriesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'categories'>
);

export type RandomJokeQueryVariables = {
  category: Scalars['String']
};


export type RandomJokeQuery = (
  { __typename?: 'Query' }
  & { joke: Maybe<(
    { __typename?: 'Joke' }
    & Pick<Joke, 'value'>
  )> }
);


export const JokesCategoriesDocument = gql`
    query jokesCategories {
  categories
}
    `;
export type JokesCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<JokesCategoriesQuery, JokesCategoriesQueryVariables>, 'query'>;

    export const JokesCategoriesComponent = (props: JokesCategoriesComponentProps) => (
      <ApolloReactComponents.Query<JokesCategoriesQuery, JokesCategoriesQueryVariables> query={JokesCategoriesDocument} {...props} />
    );
    
export type JokesCategoriesProps<TChildProps = {}> = ApolloReactHoc.DataProps<JokesCategoriesQuery, JokesCategoriesQueryVariables> | TChildProps;
export function withJokesCategories<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  JokesCategoriesQuery,
  JokesCategoriesQueryVariables,
  JokesCategoriesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, JokesCategoriesQuery, JokesCategoriesQueryVariables, JokesCategoriesProps<TChildProps>>(JokesCategoriesDocument, {
      alias: 'jokesCategories',
      ...operationOptions
    });
};

/**
 * __useJokesCategoriesQuery__
 *
 * To run a query within a React component, call `useJokesCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useJokesCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJokesCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useJokesCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JokesCategoriesQuery, JokesCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<JokesCategoriesQuery, JokesCategoriesQueryVariables>(JokesCategoriesDocument, baseOptions);
      }
export function useJokesCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JokesCategoriesQuery, JokesCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JokesCategoriesQuery, JokesCategoriesQueryVariables>(JokesCategoriesDocument, baseOptions);
        }
export type JokesCategoriesQueryHookResult = ReturnType<typeof useJokesCategoriesQuery>;
export type JokesCategoriesLazyQueryHookResult = ReturnType<typeof useJokesCategoriesLazyQuery>;
export type JokesCategoriesQueryResult = ApolloReactCommon.QueryResult<JokesCategoriesQuery, JokesCategoriesQueryVariables>;
export const RandomJokeDocument = gql`
    query randomJoke($category: String!) {
  joke(category: $category) {
    value
  }
}
    `;
export type RandomJokeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RandomJokeQuery, RandomJokeQueryVariables>, 'query'> & ({ variables: RandomJokeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RandomJokeComponent = (props: RandomJokeComponentProps) => (
      <ApolloReactComponents.Query<RandomJokeQuery, RandomJokeQueryVariables> query={RandomJokeDocument} {...props} />
    );
    
export type RandomJokeProps<TChildProps = {}> = ApolloReactHoc.DataProps<RandomJokeQuery, RandomJokeQueryVariables> | TChildProps;
export function withRandomJoke<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RandomJokeQuery,
  RandomJokeQueryVariables,
  RandomJokeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RandomJokeQuery, RandomJokeQueryVariables, RandomJokeProps<TChildProps>>(RandomJokeDocument, {
      alias: 'randomJoke',
      ...operationOptions
    });
};

/**
 * __useRandomJokeQuery__
 *
 * To run a query within a React component, call `useRandomJokeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRandomJokeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomJokeQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useRandomJokeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RandomJokeQuery, RandomJokeQueryVariables>) {
        return ApolloReactHooks.useQuery<RandomJokeQuery, RandomJokeQueryVariables>(RandomJokeDocument, baseOptions);
      }
export function useRandomJokeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RandomJokeQuery, RandomJokeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RandomJokeQuery, RandomJokeQueryVariables>(RandomJokeDocument, baseOptions);
        }
export type RandomJokeQueryHookResult = ReturnType<typeof useRandomJokeQuery>;
export type RandomJokeLazyQueryHookResult = ReturnType<typeof useRandomJokeLazyQuery>;
export type RandomJokeQueryResult = ApolloReactCommon.QueryResult<RandomJokeQuery, RandomJokeQueryVariables>;