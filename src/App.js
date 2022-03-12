import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
