import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import { Exchanges, HomePage, News, Cryptocurrencies, CryptoDetails, Navbar, VirtualPortofolio } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            {/* <Route exact path="/virtualportofolio">
              <VirtualPortofolio />
            </Route> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </Layout>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  </div>
);

export default App;