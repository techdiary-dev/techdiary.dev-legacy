import styled, { createGlobalStyle } from 'styled-components'
import editStyles from './editStyles'

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

	
`
