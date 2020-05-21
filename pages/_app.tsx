import React from "react";
import Router from "next/router";
import np from "nprogress";
import { withApollo } from "lib/apollo";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "styles/variables";
import moment from "moment";
import "react-markdown-editor-lite/lib/index.css";
import useMe from "components/useMe";
// import Prism from "prismjs";
// import "prismjs/components/prism-jsx";

Router.events.on("routeChangeStart", () => {
  np.start();
});
Router.events.on("routeChangeComplete", () => {
  np.done();
});

moment.locale("bn");

let StyledServerError = styled.div`
  width: 800px;
  text-align: center;
  margin: 25px auto;
  /* margin: auto; */
  /* position: absolute;
	top: 50%;
	left: 50%; */
  /* transform: translate(-50%, -50%); */

  pre {
    font-size: 18px;
    overflow: scroll;
    text-align: left;
    background-color: #000000d6;
    border-radius: 5px;
    color: #fff;
    max-height: 400px;
  }
`;

const TectDiaryRoot = ({ Component, pageProps }) => {
  let { error } = useMe();

  if (error)
    return (
      <StyledServerError>
        <h1>ওহ! অভ্যন্তরীণ সার্ভারে সমস্যা</h1>
        <h2>NODE_ENV: {process.env.NODE_ENV}</h2>
        {process.env.NODE_ENV !== "production" && (
          <>
            <h3>
              ভুল: <mark>{error?.message}</mark>
            </h3>
            <pre>{JSON.stringify(error, undefined, 4)}</pre>
          </>
        )}
      </StyledServerError>
    );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default withApollo({ ssr: true })(TectDiaryRoot);
//
