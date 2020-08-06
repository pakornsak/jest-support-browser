//@ts-check
/**
 * @param {number} v
 */
const mathFeature = (v) => {
  const missing = undefined;

  if (v < 38) {
    Math.acosh = missing;
    Math.asinh = missing;
    Math.atanh = missing;
    Math.cbrt = missing;
    Math.clz32 = missing;
    Math.cosh = missing;
    Math.expm1 = missing;
    Math.fround = missing;
    Math.hypot = missing;
    Math.log10 = missing;
    Math.log1p = missing;
    Math.log2 = missing;
    Math.sign = missing;
    Math.sinh = missing;
    Math.tanh = missing;
    Math.trunc = missing;
  }
  if (v < 28) {
    Math.imul = missing;
  }
};

module.exports = mathFeature;
