/**
 * Verifica que un CC de Ecuador sea valido
 * @param {String | Number} cc
 * @returns {Boolean}
 */
const validateEcuadorCCAndCE = (cc) => {
  /**
   * Proceso explicado para validar la CC de Ecuador
   * https://medium.com/@bryansuarez/c%C3%B3mo-validar-c%C3%A9dula-y-ruc-en-ecuador-b62c5666186f
   *
   * Ejemplos:
   * 1713175071
   * 1711112969
   * 1710034065
   */

  let total = 0;
  let longCheck = cc.length - 1;

  for (let i = 0; i < longCheck; i++) {
    if (i % 2 === 0) {
      let aux = cc.charAt(i) * 2;
      if (aux > 9) aux -= 9;
      total += aux;
    } else {
      total += parseInt(cc.charAt(i));
    }
  }

  let verificationDigit = total % 10 ? 10 - (total % 10) : 0;

  return parseInt(cc.charAt(longCheck)) == verificationDigit;
};
