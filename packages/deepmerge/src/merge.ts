import { configure } from "./configure";

export const deepmerge = <T = unknown>(...params: any[]): T =>
  configure()(...params);
