import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../components/Calculator';
import Cell from '../components/Cell';
import Home from '../components/Home';
import Quote from '../components/Quote';
import NavBar from '../components/NavBar';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  // Navlink: 'NavLink'
  NavLink: () => {
    const NavLink = 'NavLink';
    return <NavLink />;
  },
}));

const fakeFunc = () => { };

it('renders Calculator correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Cell correctly', () => {
  const tree = renderer
    .create(<Cell myClass="text-start" handleClick={fakeFunc}>fake-text</Cell>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Home correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Quote correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders NavBar correctly', () => {
  const tree = renderer
    .create(<NavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
