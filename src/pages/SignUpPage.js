import React from 'react';

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>

        <label htmlFor='username'>UserName</label>
        <input type='text' id='username' />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
      </div>
    );
  }
}

export default SignUpPage;
