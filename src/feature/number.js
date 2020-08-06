//@ts-check
/**
 * @param {number} v
 */
const numberFeature = (v) => {
  const missing = undefined;

  if (v < 34) {
    // Number.EPSILON = missing; //readonly
    // Number.MAX_SAFE_INTEGER = missing; //readonly
    // Number.MIN_SAFE_INTEGER = missing; //readonly
    Number.isInteger = missing;
    Number.isSafeInteger = missing;
    Number.parseFloat = missing;
    Number.parseInt = missing;
  }
  if (v < 25) {
    Number.isNaN = missing;
  }
  if (v < 19) {
    Number.isFinite = missing;
  }
};

module.exports = numberFeature;
