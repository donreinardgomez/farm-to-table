const objectToString = Object.prototype.toString;

/**
 * Check if a value is an object
 */
export function isObject(value: any): value is object {
  const type = typeof value;

  const isObject =
    value != null &&
    (type === 'object' || type === 'function') &&
    !(value instanceof Date) &&
    objectToString.call(value) !== '[object Array]';
  return isObject;
}
