import React, { useState } from 'react';

function NewResourceForm(props) {

  return (

    <main className="NewResourceForm">
      <h1> Add New Content </h1>
      <form>
        <label> Label </label>
        <input />
        <label> Label </label>
        <input />
        <label> Label </label>
        <input />
        <label> Label </label>
        <input />
        <select>
          <option selected value="Select Page">Select Page</option>
          <option value="Resources">Resources</option>
          <option value="Online">Online</option>
          <option value="Response_Tracker">Response Tracker</option>
        </select>
        <button> Submit </button>
      </form>
    </main>
  );
}

export default NewResourceForm;
