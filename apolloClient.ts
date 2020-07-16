import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import fetch from "isomorphic-unfetch";

export default function createApolloClient(initialState, ctx) {
  // const authLink = setContext((_, { headers }) => ({
  //   headers: {
  //     ...headers,
  //     Cookie: ctx && ctx?.req?.headers?.cookie ? ctx?.req.headers.cookie : "",
  //   },
  // }));
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API,
    credentials: "include",

    fetch,
  });
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: httpLink,
    cache: new InMemoryCache().restore(initialState),
    connectToDevTools: process.env.NODE_ENV !== "production",
  });
}
