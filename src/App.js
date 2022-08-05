import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Myblog from './components/Myblog';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
             <Route path="/" element={<Myblog/>}/>
             <Route path="/Create" element={<Create/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
