import { defs as recruitmentDefs, recruitment } from './recruitment';

import { defs as authorizationDefs, authorization } from './authorization';

(window as any).defs = {
  recruitment: recruitmentDefs,
  authorization: authorizationDefs,
};
(window as any).API = {
  recruitment,
  authorization,
};
