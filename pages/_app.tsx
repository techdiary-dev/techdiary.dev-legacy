import React from "react";
import Router from "next/router";
import np from "nprogress";
import { withApollo } from "lib/apollo";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "styles/variables";
import moment from "moment";
import "styles/index.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/solarized.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "lib/apolloClient";
// import Prism from "prismjs";
// import "prismjs/components/prism-jsx";

Router.events.on("routeChangeStart", () => {
  np.start();
});
Router.events.on("routeChangeComplete", () => {
  np.done();
});

moment.locale("bn");

const TectDiaryRoot = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default TectDiaryRoot;
