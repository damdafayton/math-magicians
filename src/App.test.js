import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router';
import App from './App';

describe('App render all and test', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });

  test('if NavBar links exist', () => {
    expect(screen.getByLabelText('Calculator')).toBeInTheDocument();
    expect(screen.getByLabelText('Quote')).toBeInTheDocument();
    expect(screen.getByLabelText('Home')).toBeInTheDocument();
    screen.debug();
  });

  test('Quote link and check the owner of the quote', () => {
    userEvent.click(screen.getByLabelText('Quote').firstChild);
    screen.debug();
    expect(
      screen.getByText('-Raymond L. Wilder, 1968'),
    ).toBeInTheDocument();
  });

  test('to open Calculate page and click all calculator buttons', () => {
    userEvent.click(screen.getByLabelText('Calculator').firstChild);
    screen.debug();

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => userEvent.click(cell));
    const resultElement = document.querySelector('#calculate-result');

    expect(resultElement.innerHTML).toBe('0');
  });
});
