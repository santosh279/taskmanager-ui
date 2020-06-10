import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import PageNotFound from '../../Components/PageNotFound/pagenotfound';
import Dashboard from '../../Components/Dashboard/dashboard';
import Sidebar from '../../Components/Sidebar/sidebar';
import Subsidebar from '../../Components/Subsidebar/subsidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Router >
          <div className="container-fluid">
            <Sidebar />
            <Subsidebar />
            <Switch>
              <Redirect exact from='/' to='/dashboard' />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
