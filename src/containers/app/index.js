import React from 'react';
import { Route } from 'react-router-dom'
import NavigationBar from '../../components/NavigationBar/navigation-bar'
import Home from '../home'
import About from '../about'
import Inventory from '../inventory'
import Order from '../order'
import Orders from '../orders'
import Reports from '../reports'

import 'font-awesome/css/font-awesome.min.css';

const App = () => (
  <div>
    <NavigationBar indexRoute='/index'></NavigationBar>
    <header>
      {/*<Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/customers">Customers</Link>*/}
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/order/:id" component={Order} />
      <Route exact path="/reports" component={Reports} />
    </main>
  </div>
)

export default App
