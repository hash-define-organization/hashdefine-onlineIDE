import './App.scss';
import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


/* This is App class that calls Header and Main files, whereas CodeEditor and
   Terminal files are called in Main folder, Main folder is present in Components 
   folder */
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