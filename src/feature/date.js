//@ts-check
/**
 * @param {number} v
 */
const dateFeature = (v) => {
  const missing = undefined;

  if (v < 5) {
    Date.now = missing;
  }
  if (v < 3) {
    Date.prototype.toJSON = missing;
    Date.prototype.toISOString = missing;
  }
};

module.exports = dateFeature;
