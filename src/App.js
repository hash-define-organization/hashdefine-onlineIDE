import './App.scss';
import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header/>
				<Main/>
			</div>
		);
	}
}

export default App;