import React, { useContext, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { AppContext } from './../../context/AppContext';
import Home from './Home';
import Emoji from './Emoji';
import Minesweeper from './Minesweeper';
import Form from './Form';
import 'normalize.css';
import './../../sass/App.scss';

const Frame = () => {

  const [counter] = useContext(AppContext);
  
  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <header>
            <div className="logo">
              🐻 {counter}
            </div>
            <menu>
              <ul>
                <li>
                  <NavLink tabIndex="2" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink tabIndex="3" exact to="/emoji">Emoji</NavLink>
                </li>
                <li>
                  <NavLink tabIndex="3" exact to="/minesweeper">MineSweeper</NavLink>
                </li>
                <li>
                  <NavLink tabIndex="4" exact to="/form">Form</NavLink>
                </li>
              </ul>
            </menu>
          </header>
          <section>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/emoji" component={Emoji} />
              <Route exact path="/minesweeper" component={Minesweeper} />
              <Route exact path="/form" component={Form} />
              <Route render={() => <h2>404 Page Not Found</h2>} />
            </Switch>
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
