import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainPage from './pages/Main/MainPage';

import './App.scss';

function App() {
  return (
    <Router>
        <div className="c-app">
            <header>
                Header
            </header>
            <main>
                <MainPage />
            </main>
            <footer>
                Footer
            </footer>
        </div>
    </Router>
  );
}

export default App;
