import deepmergelib from 'deepmerge';

function isObject(value?: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function isValid(value: unknown) {
  return value === undefined || value === null || isObject(value);
}

export function configure(config?: object) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <T = unknown>(...parameters: any): T => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (parameters.some((p: any) => !isValid(p))) {
      throw new Error(
        'All merge parameters are expected to be objects, null, or undefined.',
      );
    }

    return deepmergelib.all(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parameters.map((p: any) => p || {}),
      config,
    ) as T;
  };
}
