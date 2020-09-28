import { defs as mankeAdDefs, mankeAd } from './mankeAd';

import { defs as mankeUserDefs, mankeUser } from './mankeUser';

(window as any).defs = {
  mankeAd: mankeAdDefs,
  mankeUser: mankeUserDefs,
};
(window as any).API = {
  mankeAd,
  mankeUser,
};
