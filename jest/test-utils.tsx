import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import useAuthService, { AuthContext } from '../src/pages/auth/useAuthService';

const AllTheProviders = ({ children }: { children?: React.ReactNode }) => {
  const authService = useAuthService();

  return <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>;
};

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
