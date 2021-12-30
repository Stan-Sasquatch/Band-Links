import React from "react";
import "./App.css";
import Artists from "./Artists/Artists";

function App() {
	return (
		<div className="App">
			<Artists initialArtistId={1} />
		</div>
	);
}

export default App;
