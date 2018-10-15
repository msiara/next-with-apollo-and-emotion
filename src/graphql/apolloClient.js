import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import 'isomorphic-fetch';
import { APOLLO_CLIENT_KEY } from './constants';

if (!process.browser) {
  global.fetch = fetch;
}

const inMemoryCache = new InMemoryCache();

const httpLink = new HttpLink({ uri: process.env.HTTP_LINK_URI });

const createApolloClient = initialState => new ApolloClient({
  cache: inMemoryCache.restore(initialState),
  connectToDevTools: process.browser,
  link: httpLink,
  ssrMode: !process.browser,
});

export const getApolloClient = (initialState) => {
  if (!process.browser) {
    return createApolloClient(initialState);
  }

  if (!window[APOLLO_CLIENT_KEY]) {
    window[APOLLO_CLIENT_KEY] = createApolloClient(initialState);
  }

  return window[APOLLO_CLIENT_KEY];
};
