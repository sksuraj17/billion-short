import React from 'react';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import logo from './logo/wiki-logo.png';

function App() {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [searchInfo, setSearchInfo] = useState({});

	const handleSearch = async e => {
		e.preventDefault();
		if (search === '') return;

		const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=15&srsearch=${search}`;		const response = await fetch(endpoint);
		if (!response.ok){
			throw Error(response.statusText);
		}

		const json = await response.json();
		console.log(json);
		setResults(json.query.search);
		setSearchInfo(json.query.searchinfo);
	}
	return (
		<div className="App">
			<header>
			<img src={logo}></img>
			<h1>Billion Short 🔍</h1>
			{(!searchInfo.totalhits) ? <h2>A Wiki Clone</h2>:<h2>Work by Suraj SK   ♥️</h2>}
			<form className="search-box" onSubmit={handleSearch}>
				<input type="search" placeholder="Whatever you are looking for is looking for you!" 
					value={search}
					onChange={e => setSearch(e.target.value)}>
				</input>
			</form>
						{(!searchInfo.totalhits) ? <h2>A Wiki Clone</h2>:<a href="https://www.linkedin.com/in/suraj-sk/" className='work'>Work by Suraj SK   ♥️</a>}

			</header>
			<div className="results">
				{results.map((result, i) =>{
					const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
					return(
						<div className="result" key={i}>
						<h3>{ result.title }</h3>
						<p dangerouslySetInnerHTML={{ __html: result.snippet}}></p>
						<a href={url} target="_blank" rel='noreferer'>Read More</a>
					</div>
					)
				})}

			</div>
		</div>
	);
}

export default App;
