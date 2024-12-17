import '@testing-library/jest-dom/vitest';
import ResizeObserver from 'resize-observer-polyfill';
import { server } from './mocks/server';

beforeAll(()=>server.listen());
afterAll(()=>server.resetHandlers());
afterAll(()=>server.close());

// provide testing environment with ResizeObserver
global.ResizeObserver = ResizeObserver;

window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();

// Imitate the window object because the test is running in a Node environment, not a browser.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});