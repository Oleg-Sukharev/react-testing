import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SearchBox from '../../src/components/SearchBox';

describe('SearchBox', () => {
  const renderSearchBox = () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<SearchBox onChange={onChange} />);

    return {
      input: screen.getByPlaceholderText(/search/i),
      onChange: onChange,
      user
    }
  }

  it('should render an input field', () => {
    const { input } = renderSearchBox();

    expect(input).toBeInTheDocument();
  })

  it('should call onChange when Enter is pressed', async () => {
    const { input, onChange, user } = renderSearchBox();
    const searchTerm = 'searchTerm';

    await user.type(input, searchTerm + '{enter}');
    expect(onChange).toHaveBeenCalledWith(searchTerm);
  })

  it('should not trigger onChange when typing without pressing Enter', async () => {
    const { input, user, onChange } = renderSearchBox();
    const searchTerm = 'searchTerm';

    await user.type(input, searchTerm);
    expect(onChange).not.toHaveBeenCalled();
  });
})