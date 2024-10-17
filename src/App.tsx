import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import SearchByDistance from './pages/SearchByDistance';
import SearchReservoir from './pages/Sort';
import SubmitData from './pages/SearchByDistance';



const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/distance-search" element={<SearchByDistance />} />
        <Route path="/reservoir-search" element={<SearchReservoir />} />
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </Router>
  );
};



export default App;