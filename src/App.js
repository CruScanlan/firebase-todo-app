import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';

import MainPage from './pages/Main/MainPage';

import './App.scss';

function App() {
  return (
    <Router>
        <div className="c-app">
            <header>
                <NavBar />
            </header>
            <main>
                <MainPage />
            </main>
            <footer>
            </footer>
        </div>
    </Router>
  );
}

export default App;
