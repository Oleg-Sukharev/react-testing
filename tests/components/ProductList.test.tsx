import { render, screen } from '@testing-library/react';
import ProductList from '../../src/components/ProductList';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

describe('ProductList', () => {
  it('should render a list of products', async () => {
    render(<ProductList />);

    const list = await screen.findAllByRole('listitem');

    expect(list.length).toBeGreaterThan(0);
  })

  it('should render products available if  no product is found', async () => {
    server.use(http.get('/products', () => HttpResponse.json([])));
    render(<ProductList />);

    const message = await screen.findByText(/no products /i);
    expect(message).toBeInTheDocument();
  })
})
