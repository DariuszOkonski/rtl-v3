import React from 'react';
// import axios from 'axios';

class SignUpPage extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
  };

  onChangeUsername = (event) => {
    const currentValue = event.target.value;
    this.setState({
      username: currentValue,
    });
  };

  onChangeEmail = (event) => {
    const currentValue = event.target.value;
    this.setState({
      email: currentValue,
    });
  };

  onChangePassword = (event) => {
    const currentValue = event.target.value;
    this.setState({
      password: currentValue,
    });
  };

  onChangePasswordRepeat = (event) => {
    const currentValue = event.target.value;
    this.setState({
      passwordRepeat: currentValue,
    });
  };

  submit = () => {
    const { username, email, password } = this.state;
    const body = { username, email, password };
    // axios.post('/api/1.0/users', body);
  };

  render() {
    let disabled = true;
    const { password, passwordRepeat } = this.state;

    if (password && passwordRepeat) {
      disabled = password !== passwordRepeat;
    }

    return (
      <div>
        <h1>Sign Up</h1>

        <label htmlFor='username'>UserName</label>
        <input type='text' id='username' onChange={this.onChangeUsername} />
        <br />

        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' onChange={this.onChangeEmail} />
        <br />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={this.onChangePassword}
        />
        <br />

        <label htmlFor='passwordRepeat'>Password Repeat</label>
        <input
          type='password'
          name='passwordRepeat'
          id='passwordRepeat'
          onChange={this.onChangePasswordRepeat}
        />
        <br />

        <button disabled={disabled} onClick={this.submit}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUpPage;
