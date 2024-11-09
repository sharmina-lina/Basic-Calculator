import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Basic-Calculator heading', async () => {
  render(<App />);
  const headingElement = await screen.findByText(/basic-calculator/i);
  expect(headingElement).toBeInTheDocument();
});
