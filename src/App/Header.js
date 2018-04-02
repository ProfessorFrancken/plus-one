import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Header = ({ title, onClick }) => (
  <div className="header">
    <div className="titleName">
      <Route exact path="/pricelist" render={() => <span>Pricelist</span>} />
      <Route exact path="/settings" render={() => <span>Settings</span>} />
      <Route exact path="/prominent" render={() => <span>Prominent</span>} />
      <Route exact path="/recent" render={() => <span>Recent</span>} />
      <Route exact path="/committees" render={() => <span>Committees</span>} />
      <Route exact path="/statistics" render={() => <span>Statistics</span>} />
      <Route
        exact
        path="/committees/:page(\d+)"
        render={() => <span>{title}</span>}
      />
      <Route exact path="/products" render={() => <span>{title}</span>} />
    </div>
    <Route
      exact
      path="/products"
      render={() => (
        <NavLink exact to="/pricelist">
          {' '}
          Show prices{' '}
        </NavLink>
      )}
    />
    <div className="association" onClick={onClick}>
      T.F.V. 'Professor Francken'
    </div>
  </div>
);

export default Header;
