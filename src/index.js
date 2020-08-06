//@ts-check
const arrayFeature = require("./feature/array");
const dateFeature = require("./feature/date");
const mathFeature = require("./feature/math");
const numberFeature = require("./feature/number");
const regexpFeature = require("./feature/regexp");
const stringFeature = require("./feature/string");
const objectFeature = require("./feature/object");

/**
 * @param {number} v
 */
const chrome = (v) => {
  // remove features
  arrayFeature(v);
  dateFeature(v);
  mathFeature(v);
  numberFeature(v);
  objectFeature(v);
  regexpFeature(v);
  stringFeature(v);
};

const supportBrowser = { chrome };
module.exports = supportBrowser;
