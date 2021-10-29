
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Users from './Containers/Users/Users';

function App() {

  

  return (

    <div className="App">
       
      <BrowserRouter>
      

        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/users" exact component={Users}/>

        </Switch>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
