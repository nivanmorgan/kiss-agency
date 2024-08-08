import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Home, Bot } from './pages';
import { CallUs } from './components';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				{/* <Route exact path="/bot" element={<Bot />} /> */}
			</Routes>
			<CallUs />
		</>
	);
}

export default App;
