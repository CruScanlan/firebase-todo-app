import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="c-navbar">
        <Link className="c-navbar__logo-container" to="/">
            <div className="c-navbar__logo">
                Firebase Todo App
            </div>
        </Link>
    </nav>
  );
}
