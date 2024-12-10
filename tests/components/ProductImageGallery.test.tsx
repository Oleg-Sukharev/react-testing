import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
  it('should render nothing if empty array is passed', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    // const img = screen.queryByRole('img');
    // expect(img).not.toBeInTheDocument();

    expect(container).toBeEmptyDOMElement();
  })

  it('should render a list of images', () => {
    const imageUrls: string[] = ['url1', 'ur2l'];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url);
    });
  })
})