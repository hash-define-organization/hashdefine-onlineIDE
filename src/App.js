import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sketch from './pages/Sketch';
import NotFound from './pages/NotFound';


/* This is App class that calls Header and Main files, whereas CodeEditor and
   Terminal files are called in Main folder, Main folder is present in Components 
   folder */
class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sketch" element={<Sketch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
