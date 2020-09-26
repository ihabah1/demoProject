import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" component={Shop} />
				</Switch>
			</div>
		</Router>

	);

}

const Home = () => (
	<div>
		<h1>Home Page</h1>
	</div>
);

//13:44 
//https://www.youtube.com/watch?v=Law7wfdg_ls

export default App; 
