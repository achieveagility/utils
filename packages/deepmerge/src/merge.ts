import { configure } from "./configure.js";

export const deepmerge = <T = unknown>(...params: any[]): T =>
  configure()(...params);
