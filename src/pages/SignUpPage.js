import React from 'react';

class SignUpPage extends React.Component {
  state = {
    password: '',
    passwordRepeat: '',
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
        <input type='text' id='username' />
        <br />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
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

        <button disabled={disabled}>Sign Up</button>
      </div>
    );
  }
}

export default SignUpPage;
