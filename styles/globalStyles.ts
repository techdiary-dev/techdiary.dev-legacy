import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Kohinoor Bangla';
		src: url('/static/fonts/KohinoorBangla-Regular.eot');
		src: url('/static/fonts/-Regular.eot?#iefix') format('embedded-opentype'),
			url('/static/fonts/KohinoorBangla-Regular.woff2') format('woff2'),
			url('/static/fonts/KohinoorBangla-Regular.woff') format('woff'),
			url('/static/fonts/KohinoorBangla-Regular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: 'Kohinoor Bangla';
		font-weight: 400;
		background-color: #eeeeee;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	h1 {
		margin: 0;
		font-size: 3.6rem;
		line-height: 4.5rem;
	}
	h2 {
		margin: 0;
		font-size: 3rem;
		line-height: 4.5rem;
	}
	h3 {
		margin: 0;
		font-size: 2.5rem;
		line-height: 4.5rem;
	}
	h4 {
		margin: 0;
		font-size: 2rem;
		line-height: 3.5rem;
	}

	a {
		color: #484e4e;
		text-decoration: none;
	}

	a:hover {
		opacity: 0.9;
		color: #000;
		/* text-decoration: underline; */
	}
	button:hover {
		cursor: pointer;
	}

	input::focus {
		outline: none;
	}

	#nprogress{pointer-events:none}#nprogress .bar{background:#24b3ae;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #24b3ae,0 0 5px #24b3ae;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#24b3ae;border-left-color:#24b3ae;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
`
