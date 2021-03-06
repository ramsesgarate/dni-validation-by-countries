var module11 = require("../helpers/index").module11;

/**
 * @description Verifica que el RUT de Chile sea valido
 * @param {String} idNumber
 * @returns {Boolean}
 */
const isValid = (idNumber) => {
  const checkDigit = idNumber.slice(-1);
  const mod11 = module11(idNumber.slice(0, -1));

  switch (mod11) {
    case 11:
      return checkDigit === 0;
    case 10:
      return checkDigit === "k" || checkDigit === "K";
    default:
      return checkDigit == mod11;
  }
};

module.exports = {
  isValid,
};
