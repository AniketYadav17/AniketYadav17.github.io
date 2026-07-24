import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Projects';

test('renders three real project cards with no placeholder overlay', () => {
  render(
    <MemoryRouter>
      <Projects darkMode={false} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Sentinel: FCA Compliance Auditor/)).toBeInTheDocument();
  expect(screen.getByText(/Neighbourhood Pulse: London Property Intelligence/)).toBeInTheDocument();
  expect(screen.getByText(/Multi-Task Vision Transformer/)).toBeInTheDocument();
  expect(screen.queryByText(/View Details/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /live demo/i })).toHaveAttribute(
    'href',
    'https://neighbourhood-pulse.streamlit.app'
  );
  expect(screen.getByText('Agentic RAG')).toBeInTheDocument();
});
