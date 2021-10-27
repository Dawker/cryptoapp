/* eslint-disable @typescript-eslint/no-unused-vars */

import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News, Footer, VirtualPortofolio } from './components'
import './App.css'

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
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
          <Route exact path="/virtualportofolio">
            <VirtualPortofolio />
          </Route>
        </Switch>
      </Layout>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  </div>
);

export default App;