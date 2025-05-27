import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from "./pages/home";
export default function main(params) { 
	 ReactDOM.render(
		<Home/>,
		document.getElementById(params.portletElementId)
	);
}
