import { createRoot } from 'react-dom/client';
import { App } from './App/App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const URL = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
