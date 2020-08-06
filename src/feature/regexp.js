//@ts-check
/**
 * @param {number} v
 */
const regexpFeature = (v) => {
  // RegExp.escape = missing; // es7.regexp
  // if (v < 50) {
  //   RegExp.prototype.unicode = missing; //readonly
  //   RegExp.prototype[Symbol.match] = missing; // core-js error
  //   RegExp.prototype[Symbol.matchAll] = missing; // core-js error
  //   RegExp.prototype[Symbol.replace] = missing; // core-js error
  //   RegExp.prototype[Symbol.search] = missing; // core-js error
  //   RegExp.prototype[Symbol.split] = missing; // core-js error
  //   RegExp[Symbol.species] = missing; //readonly
  //   RegExp.prototype.dotAll = missing; //readonly
  // }
  // if (v < 49) {
  //   RegExp.prototype.flags = missing; //readonly
  //   RegExp.prototype.sticky = missing; //readonly
  // }
};

module.exports = regexpFeature;
