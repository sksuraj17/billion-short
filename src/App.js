import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react';
import logo from './logo/wiki-logo.png';

function App() {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [searchInfo, setSeachInfo] = useState({});

	const handleSearch = async e => {
		e.preventDefault();
		if (search ==='')
			return;

		const endpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}';
		const response = await fetch(endpoint)
		if (!response.ok){
			throw Error(response.statusText);
		}

		const json = await response.json();
		console.log(json);
	}
	return (
		<div className="App">
			<header>
			<img src={logo}></img>
			<h1>Billion Short 🔍</h1>
			<h2>A Wiki Clone</h2>
			<form className="search-box" onSubmit={handleSearch}>
				<input type="search" placeholder="Whatever you are looking for is looking for you!" 
					value={search}
					onChange={e => setSearch(e.target.value)}>
				</input>
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
