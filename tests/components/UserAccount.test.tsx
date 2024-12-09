import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = { name: 'Oleg', id: 1 }

    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it('should render edit button if user is admin', () => {
    const user = {
      isAdmin: true,
      name: 'Oleg',
      id: 1
    }

    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it('should not render edit button if user is not admin', () => {
    const user = {
      isAdmin: false,
      name: 'Oleg',
      id: 1
    }

    render(<UserAccount user={user} />);

    // getByRole -> queryByRole because button should not exist
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

})