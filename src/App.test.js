import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero with name and AI Engineer title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /aniket yadav/i })).toBeInTheDocument();
  expect(screen.getAllByText(/ai engineer/i).length).toBeGreaterThan(0);
});

test('renders footer with GitHub, LinkedIn and Email links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/AniketYadav17'
  );
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://linkedin.com/in/aniket-ydv/'
  );
  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
    'href',
    'mailto:aniket.ydv99@gmail.com'
  );
});

test('navbar contains a dark mode toggle', () => {
  render(<App />);
  expect(screen.getAllByLabelText('Toggle dark mode').length).toBeGreaterThan(0);
});
