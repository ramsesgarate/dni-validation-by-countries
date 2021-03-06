import { module11 } from "../helpers/index";

/**
 * @description Check the length of the RUT
 * @param {String | Number} rut
 * @returns {Boolean
 */
const _isLengthOk = (rut) => rut.length >= 7 && rut.length <= 9;

/**
 * @description Check the sum with the modulo 11 algorithm
 * @param {String | Number} idNumber
 * @returns {Boolean}
 */
const _checksumIsOk = (rut) => {
  const checkDigit = rut.slice(-1);
  const mod11 = module11(rut.slice(0, -1));

  switch (mod11) {
    case 11:
      return checkDigit === 0;
    case 10:
      return checkDigit === "k" || checkDigit === "K";
    default:
      return checkDigit === mod11;
  }
};

/**
 * @description Verify that a Chilean RUT is valid
 * @param {String | Number} rut
 * @returns {Boolean}
 */
const isValid = (rut) => {
  return !!rut && _isLengthOk(rut) && _checksumIsOk(rut);
};

export default {
  isValid,
};
