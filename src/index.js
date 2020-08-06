//@ts-check
const arrayFeature = require("./feature/array");
const dateFeature = require("./feature/date");
const mathFeature = require("./feature/math");
const numberFeature = require("./feature/number");
const regexpFeature = require("./feature/regexp");
const stringFeature = require("./feature/string");

/**
 * @param {number} v
 */
const chrome = (v) => {
  arrayFeature(v);
  dateFeature(v);
  mathFeature(v);
  numberFeature(v);
  regexpFeature(v);
  stringFeature(v);
};

const supportBrowser = { chrome };
module.exports = supportBrowser;
