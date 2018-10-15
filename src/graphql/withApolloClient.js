import Head from 'next/head';
import React, { Component } from 'react';
import { getDataFromTree } from 'react-apollo';
import { getApolloClient } from './apolloClient';

const withApolloClient = App => class WrappedApp extends Component {
  static async getInitialProps(context) {
    const apolloClient = getApolloClient();
    let appProps = {};

    if (App.getInitialProps) {
      appProps = await App.getInitialProps(context);
    }

    if (!process.browser) {
      try {
        await getDataFromTree(<App {...appProps} {...context} apolloClient={apolloClient} />);
      } catch (error) {
        console.error(error);
      }

      Head.rewind();
    }

    return {
      ...appProps,
      apolloState: apolloClient.cache.extract(),
    };
  }

  apolloClient = getApolloClient(this.props.apolloState);

  render() {
    return <App {...this.props} apolloClient={this.apolloClient} />;
  }
};

export default withApolloClient;
