import NextApp, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../graphql/withApolloClient';

class App extends NextApp {
  render() {
    const { apolloClient, Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Next with Apollo and Emotion</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(App);
