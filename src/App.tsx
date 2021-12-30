import React from "react";
import { Tab } from "semantic-ui-react";
import "./App.css";
import Artists from "./Artists/Artists";

const panes = [
	{
		menuItem: "Artists",
		render: () => (
			<Tab.Pane>
				<Artists initialArtistId={1} />
			</Tab.Pane>
		),
	},
	{ menuItem: "Search Artists", render: () => <Tab.Pane>SEARCH ARTISTS PLACEHOLDER</Tab.Pane> },
];

function App() {
	return (
		<div className="App">
			<Tab panes={panes} />
		</div>
	);
}

export default App;
