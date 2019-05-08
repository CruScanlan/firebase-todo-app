import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';

import ListsPage from './pages/Lists/ListsPage';

import './App.scss';

function App() {
  return (
    <Router>
        <div className="c-app">
            <header>
                <NavBar />
            </header>
            <main>
                <ListsPage />
            </main>
            <footer>
            </footer>
        </div>
    </Router>
  );
}

export default App;
