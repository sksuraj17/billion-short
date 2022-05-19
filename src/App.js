import { useState } from 'react';
import logo from './logo/wiki-logo.png';

function App() {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [searchInfo, setSeachInfo] = useState({});
	return (
		<div className="App">
			<header>
			<img src={logo}></img>
			<h1>Billion Short 🔍</h1>
			<h2>A Wiki Clone</h2>
			<form className="search-box">
				<input type="search" placeholder="Whatever you are looking for is looking for you!"></input>
			</form>
			<p className="count">Search Outcomes: 0</p>
			</header>
			<div className="results">
				<div className="result">
					<h3>Title here</h3>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<a href="#">Read More</a>
				</div>
			</div>
		</div>
	);
}

export default App;
