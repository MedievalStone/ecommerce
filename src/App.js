import './App.css';
import React from 'react';
import {Homepage} from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
   <div>
      <h1>Welcome to the hats Page</h1>
   </div>
)

class  App extends React.Component {
   constructor () 
   {
      super();
      this.state={
         currentUser: null
      };

      unsubscribeFromAuth = null

      componentDidMount() {
         unsubscribeFromAuth=auth.onAuthStateChanged (user => {
            this.setState({currentUser: user});
            console.log(user);
         });
      }
      componentWillUnmount() {
         this.unsubscribeFromAuth();
      }

   }
   render() {
   return (
   <div>
      <Header />
      <Switch>
         <Route exact path='/' component= {Homepage} />
         <Route path='/shop' component={ShopPage} />
         <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div> );
    }
}

export default App;