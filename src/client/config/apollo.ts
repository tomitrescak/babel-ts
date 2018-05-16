import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { DataProps } from 'react-apollo';

import { schemaLink } from './mocks';

declare global {
  export interface QueryData<P> extends Partial<DataProps<P>> {}
}

export let client = new ApolloClient({
  cache: new InMemoryCache(),
  link: schemaLink,
  connectToDevTools: true
});
