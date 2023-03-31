import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props: any) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Mission 13
            </Link>
            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/movies">
                    Movie List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/podcast">
                    Podcasts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
