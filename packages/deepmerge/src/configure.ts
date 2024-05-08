import deepmergelib from 'deepmerge';

function isObject(value?: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function isValid(val: unknown) {
  return val === undefined || val === null || isObject(val);
}

export function configure(conf?: object) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <T = unknown>(...params: any): T => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (params.some((p: any) => !isValid(p))) {
      throw new Error(
        'All merge parameters are expected to be objects, null, or undefined.',
      );
    }

    return deepmergelib.all(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params.map((p: any) => p || {}),
      conf,
    ) as T;
  };
}
