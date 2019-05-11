import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';

import ListsPage from './pages/Lists/ListsPage';
import ListPage from './pages/List/ListPage';

import './App.scss';

function App() {
  return (
    <Router>
        <div className="c-app">
            <header>
                <NavBar />
            </header>
            <main>
                <Route path="/list/:listId" component={ListPage} />
                <Route exact path="/" component={ListsPage} />
            </main>
            <footer>
            </footer>
        </div>
    </Router>
  );
}

export default App;
