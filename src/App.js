import React, { useState, useEffect } from 'react';
import  { Route, withRouter } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import NewResourceForm from './components/NewResourceForm';
import Page from './components/Page';
import Dashboard from './components/Dashboard';
import Main from './components/Main';



function App(props) {

  const [ user, userUpdate ] = useState()

  useEffect(() => {
    loggedIn()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loggedIn = () => {
    if (localStorage.token){
      props.history.push('/dashboard')
    } else {
      // userPresentUpdate(false)
      props.history.push('/login')
    }
  }
  
  console.log(user);
  return (
    <main className="App">
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/dashboard'>
        <Dashboard user={user}/>
      </Route>

      <Route exact path='/login'>
        <LoginForm userUpdate={userUpdate}/>
      </Route>

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
