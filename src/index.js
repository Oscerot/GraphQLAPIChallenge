import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    // I couldn't find a token in the .env file, so I created one for myself in Github
    authorization: `Bearer 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`,
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode><App /></React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
