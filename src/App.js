import React from 'react';
import  { Route, withRouter } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import NewResourceForm from './components/NewResourceForm';

function App() {
  return (
    <main className="App">
      <Route exact path='/' component={LoginForm}/>

      <Route exact path='/new-resource'>
        <NewResourceForm />
      </Route>

      <Route exact path='/page'>
        <NewResourceForm />
      </Route>
    </main>
  );
}

export default withRouter(App);
