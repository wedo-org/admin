import React, { useState } from 'react';
import  { withRouter } from 'react-router-dom';
import {fetchPostLogin} from '../utils'


function LoginForm(props) {

  const [ usernameInput, usernameInputUpdate ] = useState("")
  const [ passwordInput, passwordInputUpdate ] = useState("")
  const [ errorAlert, errorAlertUpdate ] = useState(false)

  const handleSubmit = (event)=> {
    event.preventDefault();
    let userObj = {username: usernameInput, password_digest: passwordInput}
    handleLogin(userObj)
  }

  const handleLogin = async (userObj) => {
    const user = await fetchPostLogin(userObj)

    if (user?.jwt) {
      localStorage.setItem("token", user.jwt)
      props.userUpdate(user.user)
      errorAlertUpdate(false)
      props.history.push('/dashboard')
    } else {
      errorAlertUpdate(true)
      console.log("error", errorAlert);
    }

  }
  
  return (

    <main className="LoginForm">
      <h1> Login </h1>
      <form onSubmit={handleSubmit}>
        <span> Username: </span>
        <input 
          placeholder="username" 
          type="username" 
          name="username"
          onChange={(event) => usernameInputUpdate(event.target.value)}
        />
        <span> Password: </span>
        <input 
          placeholder="password" 
          type="password" 
          name="password"
          onChange={(event) => passwordInputUpdate(event.target.value)}/>
        <button>Submit</button>
      </form>
      {/* <h1> Login </h1>
      <form>
        <input />
        <input />
        <button onClick={ handleSubmit}> Login </button>
        <a href='/new-resource'> I want to submit without logging in </a>
      </form> */}
    </main>
  );
}

export default withRouter(LoginForm);
