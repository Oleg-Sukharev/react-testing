import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

describe('UserList', () => {
  it('should render no users if users do not exist', () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it('should render a list of users', () => {
    const users: User[] = [
      { id: 1, name: 'Oleg' },
      { id: 2, name: 'John' },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      // https://testing-library.com/docs/queries/byrole
      // get element with text content === {name: user.name}

      const link = screen.getByRole('link', { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  });
})
