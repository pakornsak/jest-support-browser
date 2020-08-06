//@ts-check
const stringFeature = (v) => {
  const missing = undefined;

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

  if (v < 73) {
    String.prototype.matchAll = missing;
  }
  if (v < 66) {
    String.prototype.trimEnd = missing;
    String.prototype.trimStart = missing;
  }
  if (v < 57) {
    // @ts-ignore
    String.prototype.at = missing; //non-standard
    String.prototype.padEnd = missing;
    String.prototype.padStart = missing;
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
    String.prototype[Symbol.iterator] = missing;
  }
};

module.exports = stringFeature;
