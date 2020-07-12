import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
// import { WebSocketLink } from "apollo-link-ws";
// import { split } from "apollo-link";
// import { getMainDefinition } from "apollo-utilities";
// import {} from "apollo-link-context";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API,
  credentials: "include",
  fetch,
});

// const wsLink = process.browser
// 	? new WebSocketLink({
// 			uri: `ws://localhost:5000/`,
// 			options: {
// 				reconnect: true
// 			}
// 	  })
// 	: null

// const link = process.browser
// 	? split(
// 			// split based on operation type
// 			({ query }) => {
// 				const definition = getMainDefinition(query)
// 				return (
// 					definition.kind === 'OperationDefinition' &&
// 					definition.operation === 'subscription'
// 				)
// 			},
// 			wsLink,
// 			httpLink
// 	  )
// 	: httpLink

export default function createApolloClient(initialState, ctx) {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Cookie: ctx && ctx?.req?.headers?.cookie ? ctx?.req.headers.cookie : "",
    },
  }));
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
    connectToDevTools: process.env.NODE_ENV !== "production",
  });
}
