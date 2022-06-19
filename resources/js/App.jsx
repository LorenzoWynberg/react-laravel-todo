import React from 'react';
import ReactDOM from 'react-dom';
import Main from '@routes/Main';

function App() {
	return (
		<React.StrictMode>
			<Main />
		</React.StrictMode>
	);
}

export default App;

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(<App />, app);
}