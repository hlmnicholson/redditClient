import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Header from './Header';

test('it renders the page header', () => {
  render(<Header />);
  const header = screen.getByText(/reddit friend/i);
  expect(header).toBeInTheDocument();
});

test('it renders the search bar', () => {
  render(<Header />);
  const search = screen.getByRole('textbox');
  expect(search).toBeInTheDocument();

  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeEnabled();

})

test('the user can submit a search term', () => {
  render(<Header />);
  
  // with userEvent ?
  // const search = screen.getByRole('textbox');
  // userEvent.type(search, 'dog breeds');
  // expect(search).toHaveDisplayValue('dog breeds');

  const searchPane = screen.getByRole('textbox');
  fireEvent.change(searchPane, { target: { value: 'Hello World!' } });
  expect(searchPane).toHaveValue('Hello World!');

  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeEnabled();


});