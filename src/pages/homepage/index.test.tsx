import React from 'react';
import { render, screen } from 'test-utils';

import Homepage from './index';

test('should render homepage', () => {
  render(<Homepage />);

  expect(screen.queryByText(/首页/i)).not.toBeNull();
});
