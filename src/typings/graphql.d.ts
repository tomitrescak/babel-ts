// graphql.d.ts file
declare module '*.gql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export default value;
}

// graphql.d.ts file
declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export default value;
}
