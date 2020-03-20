import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import 'normalize.css';
import './../../sass/App.scss';

const Frame = () => {

  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <header>
            <div className="logo">
              LOGO
            </div>
            <menu>
              <ul>
                <li>
                  <NavLink tabIndex="2" exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink tabIndex="3" exact to="/">MineSweeper</NavLink>
                </li>
                <li>
                  <NavLink tabIndex="4" exact to="/form">Form</NavLink>
                </li>
              </ul>
            </menu>
          </header>
          <section>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Form} />
          </section>
          <footer>
            FOOTER
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Frame;
