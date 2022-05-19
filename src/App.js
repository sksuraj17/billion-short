

function App() {
	return (
		<div className="App">
			<header>
			<h1>Billion Short</h1>
			<form className="search-box">
				<input type="search" placeholder="Whatever you are looking for is looking for you!"></input>
			</form>
			<p>Search Results: 0</p>
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
