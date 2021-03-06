import { ar } from "../helpers";

/**
 * @description Check the type of the CUIT
 * @param {String | Number} cuit
 * @returns {Boolean}
 */
const _isTypeOk = (cuit) => {
  const code = parseInt(cuit.substr(0, 2), 10);
  const validTypes = [30, 33, 34];
  return validTypes.includes(code);
};

/**
 * @description Verify that a CUIT from Argentina is valid
 * @param {String | Number} cuit
 * @returns {Boolean}
 */
const isValid = (cuit) => {
  return (
    !!cuit && ar._isLengthOk(cuit) && _isTypeOk(cuit) && ar._checksumIsOk(cuit)
  );
};

export default {
  isValid,
};
