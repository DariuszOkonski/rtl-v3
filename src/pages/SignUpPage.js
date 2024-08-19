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

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />

        <label htmlFor='passwordRepeat'>Password Repeat</label>
        <input type='password' name='passwordRepeat' id='passwordRepeat' />

        <button disabled>Sign Up</button>
      </div>
    );
  }
}

export default SignUpPage;
