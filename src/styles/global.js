import { createGlobalStyle } from 'styled-components';
import { PRIMARY_FONT } from './config/typography';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Futura';
    src: url('../fonts/FuturaBT-BookItalic.eot');
    src: url('../fonts/FuturaBT-BookItalic.eot?#iefix') format('embedded-opentype'),
        url('../fonts/FuturaBT-BookItalic.woff2') format('woff2'),
        url('../fonts/FuturaBT-BookItalic.woff') format('woff'),
        url('../fonts/FuturaBT-BookItalic.ttf') format('truetype'),
        url('../fonts/FuturaBT-BookItalic.svg#FuturaBT-BookItalic') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Futura';
    src: url('../fonts/Futura-Bold2.eot');
    src: url('../fonts/Futura-Bold2.eot?#iefix') format('embedded-opentype'),
        url('../fonts/Futura-Bold2.woff2') format('woff2'),
        url('../fonts/Futura-Bold2.woff') format('woff'),
        url('../fonts/Futura-Bold2.ttf') format('truetype'),
        url('../fonts/Futura-Bold2.svg#Futura-Bold2') format('svg');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url('../fonts/FuturaBT-Book.eot');
    src: url('../fonts/FuturaBT-Book.eot?#iefix') format('embedded-opentype'),
        url('../fonts/FuturaBT-Book.woff2') format('woff2'),
        url('../fonts/FuturaBT-Book.woff') format('woff'),
        url('../fonts/FuturaBT-Book.ttf') format('truetype'),
        url('../fonts/FuturaBT-Book.svg#FuturaBT-Book') format('svg');
    font-weight: normal;
    font-style: normal;
  }

	* {
		box-sizing: border-box;
		list-style: none;
		margin: 0;
		outline: none;
		padding: 0;
		border: none;
	}

  button {
    background: inherit;
  }

	html,
  body,
  #root {
		height: 100%;
  }

  body {
    font-family: ${PRIMARY_FONT}
  }

	a {
		text-decoration: none;
	}

	img {
		max-width: 100%;
	}
`;
