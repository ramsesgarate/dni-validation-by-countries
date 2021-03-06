var module11 = require("../helpers/index").module11;

/**
 * @description Verifica que un CUIT o CUIL de Argentina sea valido
 * @param {String | Number} idNumber
 * @returns {Boolean}
 */
const isValid = (idNumber) => {
  const checkDigit = parseInt(idNumber.slice(-1));
  const mod11 = module11(idNumber.slice(0, -1));

  switch (mod11) {
    case 11:
      return checkDigit === 0;
    case 10:
      return false;
    default:
      return checkDigit === mod11;
  }
};

module.exports = { isValid };
