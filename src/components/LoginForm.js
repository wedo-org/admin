import React, { useState } from 'react';
import  { withRouter } from 'react-router-dom';


function LoginForm(props) {

  const router = (e) => {
    e.preventDefault();
    props.history.push('/page');
  }
  
  return (

    <main className="LoginForm">
      <h1> Login </h1>
      <form>
        <input />
        <input />
        <button onClick={ (e) => router(e) }> Login </button>
        {/* <a href='/new-resource'> I want to submit without logging in </a> */}
      </form>
    </main>
  );
}

export default withRouter(LoginForm);
