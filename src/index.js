import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobleStyle from "./theme/globalstyle";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
	<React.StrictMode>
		<GlobleStyle />
		<ThemeProvider theme={Theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vit
