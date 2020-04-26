import { defs as recruitmentDefs, recruitment } from './recruitment';

(window as any).defs = {
  recruitment: recruitmentDefs,
};
(window as any).API = {
  recruitment,
};
