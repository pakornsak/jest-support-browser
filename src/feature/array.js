//@ts-check
/**
 * @param {number} v
 */
const arrayFeature = (v) => {
  const missing = undefined;

  if (v < 66) {
    Array.prototype.flat = missing;
    Array.prototype.flatMap = missing;
  }
  if (v < 66) {
    Array.prototype.values = missing;
  }
  if (v < 47) {
    Array.prototype.includes = missing;
  }
  if (v < 45) {
    Array.from = missing;
    Array.of = missing;
    Array.prototype.copyWithin = missing;
    Array.prototype.fill = missing;
    // Array.prototype.find = missing; // core-js error
    // Array.prototype.findIndex = missing; // core-js error
  }
  if (v < 38) {
    Array.prototype.entries = missing;
    Array.prototype.keys = missing;
  }
  if (v < 5) {
    Array.isArray = missing;
  }
  if (v < 3) {
    Array.prototype.reduce = missing;
    Array.prototype.reduceRight = missing;
  }
};

module.exports = arrayFeature;
