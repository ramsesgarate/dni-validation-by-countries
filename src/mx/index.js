const validateMexicoCurp = (curp) => {
  /**
   * Proceso explicado para validar el CURP de México
   * https://es.wikipedia.org/wiki/Clave_%C3%9Anica_de_Registro_de_Poblaci%C3%B3n
   *
   * Ejemplos:
   * CAHF620818HMNLNL09
   * AALL820908HJCVPN06
   * ZUNA540308MNELTN05
   * PEGA920712HNERRN09
   * CAAJ850711HMCLLR01
   */

  let regex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
  let isValid = curp.match(regex);

  if (!isValid) return "El número de CURP no es válido";

  const verificationDigit = (curpDigit17) => {
    let dictionary = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let sum = 0;
    let digit = 0;

    for (let i = 0; i < 17; i++) {
      sum = sum + dictionary.indexOf(curpDigit17.charAt(i)) * (18 - i);
    }

    digit = 10 - (sum % 10);

    if (digit == 10) return 0;
    return digit;
  };

  if (isValid[2] != verificationDigit(isValid[1]))
    return "El número de CURP no es válido";

  return true;
};
