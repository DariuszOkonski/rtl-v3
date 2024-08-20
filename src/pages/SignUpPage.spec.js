import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import userEvent from '@testing-library/user-event';
// import axios from 'axios';

describe('SignUpPage', () => {
  describe('Layout', () => {
    it('has render', () => {
      render(<SignUpPage />);
      const header = screen.queryByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });

    it('has username input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('UserName');
      expect(input).toBeInTheDocument();
    });

    it('has email input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('E-mail');
      expect(input).toBeInTheDocument();
    });

    it('has password input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument();
    });

    it('has password type for password input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password');
      expect(input.type).toBe('password');
    });

    it('has password repeat input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password Repeat');
      expect(input).toBeInTheDocument();
    });

    it('has password type for password repeat input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password Repeat');
      expect(input.type).toBe('password');
    });

    it('has sign up button', () => {
      render(<SignUpPage />);
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeInTheDocument();
    });

    it('disables the button initially', () => {
      render(<SignUpPage />);
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('enables the button when password and password repeat fields have same value', () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText('Password');
      const passwordInputRepeat = screen.getByLabelText('Password Repeat');

      userEvent.type(passwordInput, 'P4ssword');
      userEvent.type(passwordInputRepeat, 'P4ssword');

      expect(passwordInput.value).toEqual(passwordInputRepeat.value);

      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeEnabled();
    });

    // it('sends username, email and password to backend after clicking the button', () => {
    //   render(<SignUpPage />);
    //   const usernameInput = screen.getByLabelText('UserName');
    //   const emailInput = screen.getByLabelText('E-mail');
    //   const passwordInput = screen.getByLabelText('Password');
    //   const passwordInputRepeat = screen.getByLabelText('Password Repeat');

    //   userEvent.type(usernameInput, 'user1');
    //   userEvent.type(emailInput, 'user1@mail.com');
    //   userEvent.type(passwordInput, 'P4ssword');
    //   userEvent.type(passwordInputRepeat, 'P4ssword');

    //   const button = screen.getByRole('button', { name: 'Sign Up' });

    //   const mockFn = jest.fn();
    //   axios.post = mockFn;

    //   userEvent.click(button);

    //   const firstCallOfMockFunction = mockFn.mock.calls[0];
    //   const body = firstCallOfMockFunction[1];
    //   axios.post('/...', body);
    //   expect(body).toEqual({
    //     username: 'user1',
    //     email: 'user1@mail.com',
    //     password: 'P4ssword',
    //   });
    // });
  });
});
