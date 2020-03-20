import React from 'react';
import { render } from '@testing-library/react';
import PokeCatcher from './PokeCatcher';

test('renders learn react link', () => {
  const { getByText } = render(<PokeCatcher />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
