import deepmergelib from "deepmerge";

function isObject(value?: unknown): value is Record<string, any> {
  return Object.prototype.toString.call(value) === "[object Object]";
}

export const configure =
  (conf?: object) =>
  <T = unknown>(...params: any): T => {
    const isValid = (val: unknown) =>
      val === undefined || val === null || isObject(val);

    if (params.some((p) => !isValid(p))) {
      throw new Error(
        "All merge parameters are expected to be objects, null, or undefined."
      );
    }

    return deepmergelib.all(
      params.map((p) => p || {}),
      conf
    ) as T;
  };
