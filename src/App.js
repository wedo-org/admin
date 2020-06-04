import React from 'react';
import  { Route, withRouter } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import NewResourceForm from './components/NewResourceForm';
import Page from './components/Page';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <main className="App">
      <Route exact path='/' component={LoginForm}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/new-resource'>
        <NewResourceForm />
      </Route>

      <Route exact path='/page'>
        <Page />
      </Route>
    </main>
  );
}

export default withRouter(App);
