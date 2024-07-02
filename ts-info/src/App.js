import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PaginaInicio from './components/PaginaInicio';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Barraderolagem from './components/Barraderolagem';
import LoginPage from './components/LoginPage';
import AccountPage from './components/AccountPage';
import Profilepage from './components/Profilepage';

function App() {
  return (
    <Router>
      <div className="App">
      
      <Routes>
        <Barraderolagem />
        <Header />
        <PaginaInicio />
        <Pagina1 />
        <Pagina2 />
        <LoginPage />
        <AccountPage />
        <Profilepage />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
