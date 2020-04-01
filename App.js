import React from 'react';
import './App.css';
import { HashRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Admin from './components/Admin';
import Employee from './components/Employee.js';



class App extends React.Component {

      render(){
            return (
              <div className="App">
                <HashRouter>
                        
                        <Switch>
                          <Route exact path={'/Home'} component={Home}></Route>
                          <Route exact path={'/'} component={Home}></Route>
                          <Route exact path={'/Admin'} component={Admin}></Route>
                          <Route exact path={'/Employee/{id}/Update'} component={Employee}></Route>
                        </Switch>
                        
                  </HashRouter>

              </div>           
        );
  }
}

export default App;