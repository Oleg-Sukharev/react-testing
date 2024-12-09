import { it, expect, describe } from 'vitest';
import { render, screen, } from '@testing-library/react';
import Greet from '../../src/components/Greet';

// to work with dom
import '@testing-library/jest-dom/vitest';

// screen.debug();
//to show result in console -> npm run vitest --ui -> console tab

describe('Greet', () => {
  it('should render name when name is provided', () => {
    render(<Greet name='Oleg' />);
    // screen.debug();

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/oleg/i);
  });

  it('should render login button when name is not provided', () => {
    render(<Greet />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i)
  })
})
