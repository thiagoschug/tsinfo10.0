import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PaginaInicio from './components/PaginaInicio';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Barraderolagem from './components/Barraderolagem'



function App() {
  return (
    <Router>
      <div className="App">

        <Barraderolagem/>     
        <Header />
        <PaginaInicio />
        <Pagina1 />
        <Pagina2 />
        
      </div>
    </Router>
  );
}

export default App;
