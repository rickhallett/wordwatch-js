import { render, screen } from '@testing-library/react';
import App from './App';

describe('Wordwatch Testing Suite', () => {
  describe('Component: App.js', () => {
    it('renders without crashing', () => {
      render(<App />);
    });

    it('renders learn react link', () => {
      render(<App />);
      const headerTitle = screen.getByText(/Wordwatch.js/i);
      expect(headerTitle).toBeInTheDocument();
    });
  });
});
