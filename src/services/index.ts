import { defs as authorizationDefs, authorization } from './authorization';

(window as any).defs = {
  authorization: authorizationDefs,
};
(window as any).API = {
  authorization,
};
