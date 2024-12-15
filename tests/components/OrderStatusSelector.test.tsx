import { render, screen } from '@testing-library/react'
import OrderStatusSelector from '../../src/components/OrderStatusSelector'
import { Theme } from '@radix-ui/themes';
import userEvent from '@testing-library/user-event';
// itr
// setTimeout(() => { debugger; }, 1000)

describe('OrderStatusSelector', () => {
  const renderOrderStatusSelector = () => {
    const user = userEvent.setup();

    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );

    return {
      button: screen.getByRole('combobox'),
      user,
    }
  }

  it('should render New as the default', () => {
    const { button } = renderOrderStatusSelector();

    expect(button).toHaveTextContent(/new/i)
  })

  it('should render correct statuses', async () => {
    const { button, user } = renderOrderStatusSelector();

    await user.click(button);

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);

    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(['New', 'Processed', 'Fulfilled']);
  });
})