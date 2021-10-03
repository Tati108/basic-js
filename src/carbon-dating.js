import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let result = false;

  if (typeof sampleActivity !== "string") {
    return result;
  }

  const data = parseFloat(sampleActivity);

  if (data > 15 || data <= 0) {
    return result;
  }

  if (!data || NaN) {
    return result;
  } else {
    result = Math.ceil(
      Math.log(MODERN_ACTIVITY / data) / (Math.LN2 / HALF_LIFE_PERIOD)
    );
  }

  if (isNaN(result)) {
    result = false;
  }

  return result;
}
