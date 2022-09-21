import { WebSocket } from 'ws';
import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink,
  from,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';

import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { setContext } from '@apollo/client/link/context';

import { revalidationToken } from '@app/auth';
import { GRAPHQL_API_ENDPOINT, GRAPHQL_API_WS_ENDPOINT } from '@env';
import { authStorage, AuthenticationStorageKeys } from '@app/storage';

const httpLink = new HttpLink({
  uri: GRAPHQL_API_ENDPOINT,
});

const wsLink = new GraphQLWsLink(
  createClient({
    webSocketImpl: WebSocket,
    url: GRAPHQL_API_WS_ENDPOINT,
  })
);

// https://www.apollographql.com/docs/react/v3.0-beta/api/link/apollo-link-retry/
const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

const retryAuth = async () => {
  await revalidationToken();
  const idToken = authStorage.getString(AuthenticationStorageKeys.ID_TOKEN);

  return idToken;
};

const createErrorLink = onError(({ networkError, operation, forward }) => {
  // statusCode does exist on networkError
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (networkError && networkError.statusCode === 401) {
    const newIdToken = retryAuth();
    const { headers } = operation.getContext();

    operation.setContext({
      headers: {
        ...headers,
        authorization: newIdToken ? `Bearer ${newIdToken}` : '',
      },
    });
  }
  // retry operation
  return forward(operation);
});

const authLink = setContext(async (_, { headers }) => {
  const idToken = authStorage.getString(AuthenticationStorageKeys.ID_TOKEN);
  // return the headers to the context for httpLink
  return {
    headers: {
      ...headers,
      authorization: idToken ? `Bearer ${idToken}` : '',
    },
  };
});

// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

// will trigger a refresh of auth tokens with createErrorLink on 401 'unauthorized'.
export const client = new ApolloClient({
  link: from([retryLink, createErrorLink, authLink.concat(splitLink)]),
  cache: new InMemoryCache(),
});
