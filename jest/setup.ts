import 'regenerator-runtime/runtime';
import { defs as authorizationDefs, authorization } from '../src/api/authorization';

// jest.useFakeTimers();

(global as any).defs = {
  authorization: authorizationDefs,
};

(global as any).API = {
  authorization,
};
