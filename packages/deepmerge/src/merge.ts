import { configure } from './configure.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepmerge = <T = unknown>(...parameters: any[]): T =>
  configure()(...parameters);
