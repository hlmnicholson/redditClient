import { render, screen } from '@testing-library/react';
import Header from './Header';

test('it renders the page header', () => {
  render(<Header />);
  const header = screen.getByText(/reddit friend/i);
  expect(header).toBeInTheDocument();
});

test('it renders the search bar', () => {
  render(<Header />);
  const search = screen.getByRole('textbox');
  const submitButton = screen.getByRole('button');
})
