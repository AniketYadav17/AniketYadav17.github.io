import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders contact channels and current status', () => {
  render(<Contact darkMode={false} />);
  expect(screen.getByText('University of Surrey (2024–2025)')).toBeInTheDocument();
  expect(screen.getByText('Independent AI Engineer · Ex-Accenture')).toBeInTheDocument();
  const emailLinks = screen
    .getAllByRole('link')
    .filter((a) => a.getAttribute('href') === 'mailto:aniket.ydv99@gmail.com');
  expect(emailLinks.length).toBeGreaterThan(0);
  expect(screen.queryByText(/Visit LinkedIn/)).toBeInTheDocument();
});
