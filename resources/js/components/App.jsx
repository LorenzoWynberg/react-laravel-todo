import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	return (
		<div>
			Hello World
		</div>
	);
}

export default App;

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(<App />, app);
}