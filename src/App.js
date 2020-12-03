import './App.css';
import {Homepage} from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const  App= () =>(
   <div>
      <Switch>
      <Route path='/' component= {Homepage} />
      </Switch>
    </div>
)

export default App;
