import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";

export default class TechdiaryRoot extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <GlobalStyles />
          <App {...props} />
        </>
      )
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="bn">
        <Head>
          {this.props.styleTags}
          <link
            rel="shortcut icon"
            href="/logos/favicon.svg"
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          ></link>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="theme-color" content="#fdf9f3" />
        </Head>
        <body>
          <Main />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-167986263-1"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
						// Google analytics snippet
						window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'UA-171611258-1');
              					`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
		(function(h,o,t,j,a,r){
			h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
			h._hjSettings={hjid:1886608,hjsv:6};
			a=o.getElementsByTagName('head')[0];
			r=o.createElement('script');r.async=1;
			r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
			a.appendChild(r);
		})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              					`,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
