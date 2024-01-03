import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css";
import dotenv from "dotenv";

dotenv.config();

ReactDOM.render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH0_DOMAIN}
		clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
		redirectUri={window.location.origin}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>,
	document.getElementById("root"),
);
