import { ar } from "../helpers";

/**
 * @description Check the type of the CUIL
 * @param {String | Number} cuil
 * @returns {Boolean}
 */
const _isTypeOk = (cuil) => {
  const code = parseInt(cuil.substr(0, 2), 10);
  const validTypes = [20, 23, 24, 27];
  return validTypes.includes(code);
};

/**
 * @description Verify that a CUIL from Argentina is valid
 * @param {String | Number} cuil
 * @returns {Boolean}
 */
const isValid = (cuil) => {
  return (
    !!cuil && ar._isLengthOk(cuil) && _isTypeOk(cuil) && ar._checksumIsOk(cuil)
  );
};

export default {
  isValid,
};
