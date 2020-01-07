import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		list-style: none;
		margin: 0;
		outline: none;
		padding: 0;
		border: none;
	}

	html,
	body {
		height: 100%;
	}

	a {
		text-decoration: none;
	}

	img {
		max-width: 100%;
	}
`;
