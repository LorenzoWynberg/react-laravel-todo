import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Login/Login";

function App() {
	return (
		<React.Fragment>
			<Login/>
		</React.Fragment>
	);
}

export default App;

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(<App />, app);
}