import './App.css';
import React from 'react';
import {Homepage} from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage  from './pages/shop/shop.component';

const HatsPage = () => (
   <div>
      <h1>Welcome to the hats Page</h1>
   </div>
)

const  App= () =>(
   <div>
      <Switch>
         <Route exact path='/' component= {Homepage} />
         <Route path='/shop' component={ShopPage} />
         <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
)

export default App;
