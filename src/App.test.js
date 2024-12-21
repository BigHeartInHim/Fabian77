import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting text', () => {
  render(<App />);
  const greetingElement = screen.getByText(/Hi There!/i);
  expect(greetingElement).toBeInTheDocument();
});
