import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/** @test network page */
test('renders network link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/network/i);
  expect(linkElement).toBeInTheDocument();
});
