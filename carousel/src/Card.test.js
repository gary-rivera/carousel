import React from 'react';
import {render} from '@testing-library/react';
import Card from './Card';

it('renders without crashing', () => {
  render(<Card />);
});

it('matches snapshot', () => {
  const {container} = render(<Card />);
  expect(container).toMatchSnapshot();
})