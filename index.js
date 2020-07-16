//@ts-check
const missing = undefined;

/**
 * @param {number} v
 */
const supportChrome = (v) => {
  // deprecated
  String.prototype.anchor = missing;
  String.prototype.big = missing;
  String.prototype.blink = missing;
  String.prototype.bold = missing;
  String.prototype.fixed = missing;
  String.prototype.fontcolor = missing;
  String.prototype.fontsize = missing;
  String.prototype.italics = missing;
  String.prototype.link = missing;
  String.prototype.small = missing;
  String.prototype.strike = missing;
  String.prototype.sup = missing;
  //String.prototype.sub = missing;
  //String.prototype.substr = missing;

  String.prototype.trimLeft = missing; //renamed
  String.prototype.trimRight = missing; //renamed
  // Map.prototype.toJSON = missing; // es7.map
  // Set.prototype.toJSON = missing; // es7.set
  // RegExp.escape = missing; // es7.regexp

  if (v < 73) {
    String.prototype.matchAll = missing;
  }
  if (v < 66) {
    Array.prototype.flat = missing;
    Array.prototype.flatMap = missing;
  }
  if (v < 66) {
    Array.prototype.values = missing;
    String.prototype.trimEnd = missing;
    String.prototype.trimStart = missing;
  }
  if (v < 57) {
    // String.prototype.at = missing; //non-standard
    String.prototype.padEnd = missing;
    String.prototype.padStart = missing;
  }
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
  if (v < 41) {
    String.fromCodePoint = missing;
    String.raw = missing;
    String.prototype.codePointAt = missing;
    String.prototype.endsWith = missing;
    String.prototype.includes = missing;
    String.prototype.startsWith = missing;
    String.prototype.repeat = missing;
  }
  if (v < 38) {
    Array.prototype.entries = missing;
    Array.prototype.keys = missing;
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
    String.prototype[Symbol.iterator] = missing;
  }
  if (v < 34) {
    // Number.EPSILON = missing; //readonly
    // Number.MAX_SAFE_INTEGER = missing; //readonly
    // Number.MIN_SAFE_INTEGER = missing; //readonly
    Number.isInteger = missing;
    Number.isSafeInteger = missing;
    Number.parseFloat = missing;
    Number.parseInt = missing;
    String.prototype.normalize = missing;
  }
  if (v < 28) {
    Math.imul = missing;
  }
  if (v < 25) {
    Number.isNaN = missing;
  }
  if (v < 19) {
    Number.isFinite = missing;
  }
  if (v < 5) {
    Array.isArray = missing;
    Date.now = missing;
  }
  if (v < 3) {
    Array.prototype.reduce = missing;
    Array.prototype.reduceRight = missing;
    Date.prototype.toJSON = missing;
    Date.prototype.toISOString = missing;
  }
};

module.exports = supportChrome;
