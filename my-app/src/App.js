import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (

    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div> 

/*
    <div className ='App'>
    <Navbar/>
    <Home />
    </div>*/
  );
}

export default App;
