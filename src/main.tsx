import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";
import Variables from "./styles/variables";
import Reset from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyles/>
		<Variables/>
		<Reset/>
		<App/>
	</React.StrictMode>
);
