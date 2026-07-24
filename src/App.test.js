import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero with name and AI Engineer title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /aniket yadav/i })).toBeInTheDocument();
  expect(screen.getAllByText(/ai engineer/i).length).toBeGreaterThan(0);
});
