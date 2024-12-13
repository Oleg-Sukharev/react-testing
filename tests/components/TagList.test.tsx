import { screen, render, waitFor } from "@testing-library/react";
import TagList from "../../src/components/TagList";

// getQuery
// Synchronous: Checks for an element immediately.
// Throws an error if the element is not found.
// Example: getByText, getByRole.

// findQuery
// Asynchronous: Waits for the element to appear.
// Returns a promise; rejects if the element doesn’t appear within a timeout.
// Example: findByText, findByRole.

// queryQuery
// Synchronous: Returns null if the element is not found.
// Use for checking absence of elements.
// Example: queryByText, queryByRole.

describe('TagList', () => {
  it('should render tags', async () => {
    render(<TagList />);

    // handling async code 
    // 1 approach 
    await waitFor(() => {
      // without side effects
      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toBeGreaterThan(0);
    });

    // 2 approach 
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);
  })
})