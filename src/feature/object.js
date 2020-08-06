//@ts-check
/**
 * @param {number} v
 */
const objectFeature = (v) => {
  const missing = undefined;

  if (v < 73) {
    Object.fromEntries = missing; // Chrome 73
  }
  if (v < 54) {
    //   Object.entries = missing; // Chrome 54 (used by react/test/library)
    Object.values = missing; // Chrome 54
  }
  if (v < 45) {
    //   Object.assign = missing; //Chrome 45 (used by reacts-script test)
  }
  if (v < 38) {
    //   Object.getOwnPropertySymbols = missing; // Chrome 38 (used by jest.toHaveBeenCalledWith)
  }
  if (v < 34) {
    Object.setPrototypeOf = missing; // Chrome 34
  }
  if (v < 30) {
    //   Object.is = missing; // Chrome 30 (used by jest.toHaveBeenCalledWith) (used by jest.toBe)
  }
  if (v < 6) {
    Object.isExtensible = missing; // Chrome 6
    Object.preventExtensions = missing; // Chrome 6
    Object.isFrozen = missing; // Chrome 6
    Object.freeze = missing; // Chrome 6
    Object.isSealed = missing; // Chrome 6
    Object.seal = missing; // Chrome 6
  }
  if (v < 5) {
    Object.create = missing; // Chrome 5
    Object.defineProperties = missing; // Chrome 5
    Object.defineProperty = missing; // Chrome 5
    Object.getOwnPropertyDescriptor = missing; // Chrome 5
    Object.getOwnPropertyNames = missing; // Chrome 5
    Object.getPrototypeOf = missing; // Chrome 5
    Object.keys = missing; // Chrome 5
  }
};

module.exports = objectFeature;
