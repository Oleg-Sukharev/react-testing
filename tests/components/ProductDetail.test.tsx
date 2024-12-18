import { render, screen } from '@testing-library/react';
import ProductDetail from '../../src/components/ProductDetail';
import { products } from '../mocks/data';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

describe('ProductDetail', () => {
  it('should render loading indicator initially', () => {
    render(<ProductDetail productId={1} />);

    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });

  it('should render product details', async () => {
    const product = products[0];

    render(<ProductDetail productId={1} />);

    const heading = await screen.findByRole('heading');
    const name = await screen.findByText(new RegExp(product.name, 'i'));
    const price = await screen.findByText(new RegExp(String(product.price), 'i'));
    expect(heading).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('should render message if product not found', async () => {
    server.use(http.get('/products/1', () => HttpResponse.json(null)));

    render(<ProductDetail productId={1} />);

    const message = await screen.findByText(/not found/i);
    expect(message).toBeInTheDocument();
  })

  it('should render an error for invalid productId', async () => {
    render(<ProductDetail productId={0} />);

    const message = await screen.findByText(/invalid/i);
    expect(message).toBeInTheDocument();
  })
})