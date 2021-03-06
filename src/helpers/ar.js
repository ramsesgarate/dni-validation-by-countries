import { module11 } from "./index";
/**
 * @description Check the length of the CUIL
 * @param {String | Number} cuil
 * @returns {Boolean
 */
const _isLengthOk = (cuil) => cuil.length == 11;

/**
 * @description Check the sum with the modulo 11 algorithm
 * @param {String | Number} idNumber
 * @returns {Boolean}
 */
const _checksumIsOk = (idNumber) => {
  const checkDigit = parseInt(idNumber.slice(-1));
  const mod11 = module11(idNumber.slice(0, -1));

  switch (mod11) {
    case 11:
      return checkDigit === 0;
    default:
      return checkDigit === mod11;
  }
};

export default {
  _isLengthOk,
  _checksumIsOk,
};
