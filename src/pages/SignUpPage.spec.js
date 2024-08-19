import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';

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
      const input = screen.getByLabelText('Email');

      expect(input).toBeInTheDocument();
    });
  });
});
